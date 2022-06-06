# Troubleshooting

## General

- Reset the app (click your profile picture > troubleshooting > 'reset app').

## Not Loading

![](assets/not-loading.png)

- Reset the app (click your profile picture > troubleshooting > 'reset app').

## Transaction Aborted

![](assets/transaction-aborted.png)

- Go into the settings (click the profile picture) and select the option 'Use approval by transactions'

## Connection Error

![](assets/connection-error.png)

- Please make sure you are connected to a supported network (ethereum/arbitrum).
- If you are using a wallet the is NOT metamask (or you are using a ledger), check that you do use WalletConnect as the connection method.

## Remaining Debt will be Below Dust Levels.

The minimum debt that can be allowed in a vault at the time of writing is 5000 USD equivalent or 100 USD equivalent. If you try to repay an amount that would leave your debt under that level, the contracts won't let you.

![](assets/dust.png)

- Make sure that you have enough funds in your wallet to repay the entire debt.

## Liquidated

We recognize the users that have been liquidated by giving them a "Protocol Hero" role on Discord.

If you have been liquidated, we need to verify that you own the liquidated vault:

- Go to https://www.myetherwallet.com/wallet/sign
- Connect with the wallet that owns the liquidated vault
- Sign a message with any text in it
- Post the result in a #create-ticket channel in Discord.

## Maybe It's a Bug

Please check in the [bug tracker](https://github.com/yieldprotocol/bugs/issues) if there is an issue matching what you've found. If there is, you can consider waiting, or [giving us a nudge](https://discord.com/channels/752978124614008945/764135581704781864) so that we prioritize it.

## If Everything Else Fails

If you can't solve your issue with the instructions here, please open a support ticket in our Discord [#create-ticket](https://discord.com/channels/752978124614008945/893209711397195776) channel. We can't provide support on public channels for security reasons.

- Tell us what is that you were trying to achieve.
- Tell us how did you arrive to the issue.
- Tell us your address.
- If there is any debugging information (a long string of non-sensical hexadecimal data), please copy and paste that in the ticket.
- Please be aware that certain levels of support are only available during European or American business hours.
