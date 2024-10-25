## [中文翻译版](README_CN.md)

# Fiddler Everywhere Patch (Automated)
Guides you to Patch Fiddler Everywhere on Windows Automatically. 
> Parent Repo: https://github.com/msojocs/fiddler-everywhere-enhance

## Special: You can also patch manually by yourself. Visit [This repo](https://github.com/sipsuru/fiddler-everywhere-patch-manual)

## What and How?
This's a crack (actually a patch) for Telerik Fiddler Everywhere. It can grant you a trial that doesn't expire. The trial has every feature. 
This's the guide for applying patch automatically. 

![Unlimited Trial](https://github.com/user-attachments/assets/e9c83778-27fa-456a-96e6-07bb0cd7f4ad)

## Get Started.

 > [!IMPORTANT]
 > Failing to download msojocs server for all FE versions (Because msojocs renamed `master` branch to `main`), is fixed now

 > [!IMPORTANT]
 > Failing to download Yukihana Patch for FE versions < 5.17.0 (Because file names sctill contains `yukihana` not `yui` except `Yui-Patch 1.1.3 +`), is fixed now..

 > [!IMPORTANT]
 > Failing to download Yui Patch for all FE versions (Because the organization and repo-name renamed from `Yukihana` `-->` `Yui`), is fixed now.

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

 * Workflow Dispatch? or Workflow Dispatch Latest?
   - Latest Version - Workflow Dispatch - Patch the latest version, and upload as artifact.
   - Custom Version - Workflow Dispatch - Allows you to select a compatible version (5.9.0 +) and patch  and upload as a workflow artifact.

> [!TIP]
> We highly reccomend you to use ***Latest Version - Workflow Dispatch***, which patch the latest available version.
> ***Custon Version - Workflow Dispatch*** allows you to select a version starting from 5.9.0 + too.


### With `Latest Version - Workflow Dispatch` 
[![](https://github.com/sipsuru/fiddler-everywhere-patch-automated/actions/workflows/cp__latest_dispatch.yml/badge.svg)](https://github.com/sipsuru/fiddler-everywhere-patch-automated/actions/workflows/cp__latest_dispatch.yml)

  - Fork this repo.
  - Go to actions tab, Select `Latest Version - Workflow Dispatch` workflow.
  - Trigger it with `workflow dispatch`
  - After a successful trigger download artifact that named like `Fiddler-Everywhere-VX.X.X-Patched`
  - Extract it. Run it

  * *Here how you do it...*

    https://github.com/user-attachments/assets/437c3448-1ea2-4c99-9123-e56b1665a37b


### With `Custom Version - WorkFlow Dispatch` 
[![](https://github.com/sipsuru/fiddler-everywhere-patch-automated/actions/workflows/cp_dispatch.yml/badge.svg)](https://github.com/sipsuru/fiddler-everywhere-patch-automated/actions/workflows/cp_dispatch.yml)

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

> [!NOTE]
> For Generic `Linux` and `MacOS` instructions, use [source repository](https://github.com/msojocs/fiddler-everywhere-enhance)

> [!CAUTION]
> Please don't use this patch for illegal matters. And we'd love if you can buy and support the officials: [Please Support](https://www.telerik.com/purchase/fiddler)
