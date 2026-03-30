import { Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { DifyWorld } from '../../support/world'

When(
  'I enter a unique E2E app name with prefix {string}',
  async function (this: DifyWorld, prefix: string) {
    const appName = `${prefix} ${Date.now()}`

    await this.getPage().getByPlaceholder('Give your app a name').fill(appName)
  },
)

When(
  'I click the {string} nav link in the app sidebar',
  async function (this: DifyWorld, linkText: string) {
    const page = this.getPage()

    const navLink = page.getByRole('link', { name: linkText })
    await expect(navLink).toBeVisible()
    await navLink.click()
  },
)

When('I delete the app with prefix {string}', async function (this: DifyWorld, prefix: string) {
  const page = this.getPage()

  // Find the app card containing the prefix text
  const appCard = page.locator('[class*="group"]').filter({ hasText: prefix }).first()
  await expect(appCard).toBeVisible()

  // Hover to reveal the context menu trigger
  await appCard.hover()

  // Click the more-options button (three dots / ellipsis)
  const moreButton = appCard.getByRole('button').last()
  await moreButton.click()

  // Click delete in the context menu
  const deleteOption = page.getByText('Delete', { exact: true })
  await expect(deleteOption).toBeVisible()
  await deleteOption.click()

  // Confirm deletion in the alert dialog
  const dialog = page.getByRole('alertdialog')
  await expect(dialog).toBeVisible()
  await dialog.getByRole('button', { name: /Delete/ }).click()

  // Wait for the app card to disappear
  await expect(appCard).not.toBeVisible({ timeout: 10_000 })
})

Then('I should not see the {string} app card', async function (this: DifyWorld, prefix: string) {
  const page = this.getPage()

  await expect(page.getByText(prefix)).not.toBeVisible({ timeout: 10_000 })
})
