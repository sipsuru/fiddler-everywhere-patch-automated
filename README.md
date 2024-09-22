# Fiddler Everywhere Patch (Automated)
Guides you to Patch Fiddler Everywhere on Windows Manually. Source: https://github.com/msojocs/fiddler-everywhere-enhance

## Special: You can also patch manually by yourself. Visit [This repo](https://github.com/sipsuru/fiddler-everywhere-patch-manual)

## What and How?
This's a crack (actually a patch) for Telerik Fiddler Everywhere. It can grant you a trial that doesn't expire. The trial has every feature. 
This's the guide for applying patch mannually. There'll be a repo guiding you trough automatic patching.

![Unlimited Trial](https://github.com/user-attachments/assets/e9c83778-27fa-456a-96e6-07bb0cd7f4ad)

## Get Started

 > Only for Windows!

 * How even this Automated Patching Works?
   - Well, this automated patch do the same that you do mannually for patching. It downloads fiddler everywhere extract it. Remove, Replace, Edit, Move files and then, the patched application is ready.

 * Continuous or Workflow Dispatch? or Workflow Dispatch Latest?
   - Continuous - Patches FE as it's released by Telerik and make a github release of patched app.
   - Workflow Dispatch - Allows you to select a compatible version (5.9.0 +) and patch  and upload as a workflow artifact.
   - Workflow Dispatch Latest - Patch the latest version (even it's released in github releases), and upload as artifact.

> Note that Only `Workflow Dispatch` automation mentioned above is available *for now!*

### With WorkFlow Dispatch
  - Fork this repo
  - Go to actions tab, Select `Custom Version - Workflow Dispatch` workflow.
  - Trigger it with `workflow diaptch`
  - After a successful trigger download artifact that named like `Fiddler-Everywhere-VX.X.X-Patched-Maual-Dispatched`
  - Extract it. Run it

  > Please Note that Only Versions Up to 5.9.0 `( 5.0.9 + )` are supported.
  
  > You can find a list of releases here - [Release History](https://www.telerik.com/support/whats-new/fiddler-everywhere/release-history)

  
  * *Here how you do it...*

    https://github.com/user-attachments/assets/1e9fa214-b9c9-469c-83f0-e5ae4527d2f7

Note: For Generic `Linux` and `MacOS` instructions, use [source repository](https://github.com/msojocs/fiddler-everywhere-enhance)

Please don't use this patch for illegal matters. And we'd love if you can buy and support the officials: [Please Support](https://www.telerik.com/purchase/fiddler)
