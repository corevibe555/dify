import { Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { DifyWorld } from '../../support/world'

When('I navigate to the datasets page', async function (this: DifyWorld) {
  await this.getPage().goto('/datasets')
})

When('I click the new dataset card', async function (this: DifyWorld) {
  const page = this.getPage()

  const createLink = page.getByRole('link', { name: /Create Knowledge/ })
  await expect(createLink).toBeVisible()
  await createLink.click()
})

When(
  'I click the {string} header navigation link',
  async function (this: DifyWorld, linkText: string) {
    const page = this.getPage()

    const navLink = page.getByRole('link', { name: linkText, exact: true })
    await expect(navLink).toBeVisible()
    await navLink.click()
  },
)

Then('I should be on the datasets page', async function (this: DifyWorld) {
  await expect(this.getPage()).toHaveURL(/\/datasets(?:\?.*)?$/)
})

Then('I should land on the dataset creation page', async function (this: DifyWorld) {
  await expect(this.getPage()).toHaveURL(/\/datasets\/create(?:\?.*)?$/)
})
