## [中文翻译版](README_CN.md)

# Fiddler Everywhere Patch (Automated)
Guides you to Patch Fiddler Everywhere on Windows Automatically. 
> Parent Repo: https://github.com/msojocs/fiddler-everywhere-enhance

## Special: You can also patch manually by yourself. Visit [This repo](https://github.com/sipsuru/fiddler-everywhere-patch-manual)

## What and How?
This's a crack (actually a patch) for Telerik Fiddler Everywhere. It can grant you a trial that doesn't expire. The trial has every feature. 
This's the guide for applying patch mannually. There'll be a repo guiding you trough automatic patching.

![Unlimited Trial](https://github.com/user-attachments/assets/e9c83778-27fa-456a-96e6-07bb0cd7f4ad)

## Get Started.

 > [!IMPORTANT]
 > Failing to download Yukihana Patch for 5.17.0 + (Because continuous release & latest release didn't contain windows patches), is fixed now. 

 > [!IMPORTANT]
 > Not patching 5.17.0+ when you trigger from "Custom Version - Workflow Dispatch" is Fixed now!

 > [!TIP]
 > You must always check if your fork is up to date so no fails. 

 > [!NOTE]
 > Only for Windows!

 * How even this Automated Patching Works?
   - Well, this automated patch do the same that you do mannually for patching. It downloads fiddler everywhere extract it. Remove, Replace, Edit, Move files and then, the patched application is ready.

 * Continuous or Workflow Dispatch? or Workflow Dispatch Latest?
   - Latest Version - Workflow Dispatch - Patch the latest version, and upload as artifact.
   - Custom Version - Workflow Dispatch - Allows you to select a compatible version (5.9.0 +) and patch  and upload as a workflow artifact.
   - Continuous Patch - Patches FE as it's released by Telerik and make a github release of patched app.

> [!TIP]
> We highly reccomend you to use ***Latest Version - Workflow Dispatch***, which patch the latest available version. or ***Custon Version - Workflow Dispatch*** which allows you to select a version starting from 5.9.0 +

> ~`Note that Only `Workflow Dispatch` automation mentioned above is not available *for now!*~


### With `Latest Version - Workflow Dispatch`
  - Fork this repo.
  - Go to actions tab, Select `Latest Version - Workflow Dispatch` workflow.
  - Trigger it with `workflow diaptch`
  - After a successful trigger download artifact that named like `Fiddler-Everywhere-VX.X.X-Patched`
  - Extract it. Run it

  * *Here how you do it...*

    https://github.com/user-attachments/assets/437c3448-1ea2-4c99-9123-e56b1665a37b


### With `Custom Version - WorkFlow Dispatch`

  > [!IMPORTANT]
  > Before 21:25, Tuesday, September 24, 2024, there was a issue which won't patch 5.17.0+ versions (due to env error), if you trigger `Custom Version - WorkFlow Dispatch
`. & it's fixed now!


  - Fork this repo
  - Go to actions tab, Select `Custom Version - Workflow Dispatch` workflow.
  - Trigger it with `workflow diaptch` providing the version you want to patch
  - After a successful trigger download artifact that named like `Fiddler-Everywhere-VX.X.X-Patched`
  - Extract it. Run it

  > [!WARNING]
  > Please Note that Only Versions Up to 5.9.0 `( 5.9.0 + )` are supported.
  
  > You can find a list of releases here - [Release History](https://www.telerik.com/support/whats-new/fiddler-everywhere/release-history)

  * *Here how you do it...*

    https://github.com/user-attachments/assets/1e9fa214-b9c9-469c-83f0-e5ae4527d2f7


### With `Continuous Patch`
  > [!CAUTION]
  > We highly reccomend you to not to use this version. Please don't use this. It still has a lot of vulnerabilities. 
  
  - Fork this repo.
  - For Continuous Patch a `Repository Variable` named `LATEST_PATCHED_VERSION` is needed. You should put the current latest version that available in the [Release History](https://www.telerik.com/support/whats-new/fiddler-everywhere/release-history) but without 'V'. So for ex: `5.17.0`
  - The continuous patch patch newer versions than the version named in `LATEST_PATCHED_VERSION` and ***Currently you need to manually update this repository vairiable after patching a new version with this or else it'll keep patching the same version everyday!***
  - The action workflows triggers 1t 00:00 UTC everyday, and if it found a new version, the artifact will be uploaded.
    > Causion: The action won't upload patched app as release for now. So you've to manually check if a new version is patched (everyday) by refering artifact section of the runned actions.
  - If Telerik has uploaded a new version, if it's patched in a continuous trigger, download the artifact named like `Fiddler-Everywhere-VX.X.X-Patched`
  - Extract it. Run it

  > [!WARNING]
  > We highly reccomend you to disable this workflow patch as it consume a lot of resources from github action runners! & you won't like a lot's of workflow runs too.

> [!NOTE]
> For Generic `Linux` and `MacOS` instructions, use [source repository](https://github.com/msojocs/fiddler-everywhere-enhance)

> [!CAUTION]
> Please don't use this patch for illegal matters. And we'd love if you can buy and support the officials: [Please Support](https://www.telerik.com/purchase/fiddler)
