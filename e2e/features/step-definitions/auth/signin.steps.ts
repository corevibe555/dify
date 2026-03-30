import { When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { DifyWorld } from '../../support/world'

When('I open the account menu', async function (this: DifyWorld) {
  const page = this.getPage()

  const avatarTrigger = page.getByRole('button', { name: /E2E Admin/i }).first()
  await expect(avatarTrigger).toBeVisible()
  await avatarTrigger.click()
})

When('I click the log-out option', async function (this: DifyWorld) {
  const page = this.getPage()

  const logOut = page.getByRole('menuitem', { name: /Log out/i })
  await expect(logOut).toBeVisible()
  await logOut.click()

  await page.waitForURL(/\/(signin|install)/)
})
