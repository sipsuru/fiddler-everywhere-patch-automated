> [!NOTE]
> 由 AI 翻译，可能存在语法或其他错误，欢迎指正！

# Fiddler Everywhere Patch（自动化）
指导您在 Windows 上自动修补 Fiddler Everywhere。
> 父仓库：https://github.com/msojocs/fiddler-everywhere-enhance

## 特别说明：您也可以手动修补，请访问[此仓库](https://github.com/sipsuru/fiddler-everywhere-patch-manual)

## 什么是补丁？如何操作？
这是针对 Telerik Fiddler Everywhere 的 crack（实际上是补丁）。它可以让您的试用版不会过期，并且试用版包含所有功能。  
以下是手动应用补丁的指南。此外，还会有一个仓库引导您进行自动化补丁。

![无限试用版](https://github.com/user-attachments/assets/e9c83778-27fa-456a-96e6-07bb0cd7f4ad)

## 开始使用

> [!IMPORTANT]
> 现在触发 "Custom Version - Workflow Dispatch" 时已修复无法修补 5.17.0+ 的问题！

> [!NOTE]
> 仅适用于 Windows 系统！

* 自动化修补如何工作？
   - 此自动化修补与您手动修补的步骤相同。它会下载 Fiddler Everywhere，解压缩，删除、替换、编辑和移动文件，最后生成已修补的应用程序。

* Continuous Patch（连续修补）与 Workflow Dispatch 有什么区别？
   - Latest Version - Workflow Dispatch：修补最新版本并作为 artifact 上传。
   - Custom Version - Workflow Dispatch：允许您选择兼容版本（5.9.0+）进行修补，并上传为 artifact。
   - Continuous Patch：当 Telerik 发布新版本时，自动修补 Fiddler Everywhere，并发布修补后的应用程序至 GitHub release。

> [!TIP]
> 我们强烈推荐您使用 ***Latest Version - Workflow Dispatch*** 以修补最新的可用版本，或使用 ***Custom Version - Workflow Dispatch*** 选择 5.9.0+ 版本进行修补。

> ~`请注意：上述 `Workflow Dispatch` 自动化暂时不可用！`~

### 使用 `Latest Version - Workflow Dispatch`
  - Fork 此仓库。
  - 进入 actions 页面，选择 `Latest Version - Workflow Dispatch` 工作流。
  - 使用 `workflow dispatch` 触发。
  - 触发成功后，下载名为 `Fiddler-Everywhere-VX.X.X-Patched` 的 artifact。
  - 解压缩并运行它。

  * *操作步骤如下：*

    https://github.com/user-attachments/assets/437c3448-1ea2-4c99-9123-e56b1665a37b

### 使用 `Custom Version - Workflow Dispatch`

> [!IMPORTANT]
> 在 2024 年 9 月 24 日星期二 21:25 之前，如果触发 `Custom Version - Workflow Dispatch`，5.17.0+ 版本会因为环境错误无法修补。此问题现已修复！

  - Fork 此仓库。
  - 进入 actions 页面，选择 `Custom Version - Workflow Dispatch` 工作流。
  - 使用 `workflow dispatch` 触发，输入您想修补的版本。
  - 触发成功后，下载名为 `Fiddler-Everywhere-VX.X.X-Patched` 的 artifact。
  - 解压缩并运行它。

  > [!WARNING]
  > 请注意，当前仅支持 5.9.0 及以上版本（5.9.0+）。

  > 您可以在此找到发行历史记录 - [Release History](https://www.telerik.com/support/whats-new/fiddler-everywhere/release-history)

  * *操作步骤如下：*

    https://github.com/user-attachments/assets/1e9fa214-b9c9-469c-83f0-e5ae4527d2f7

### 使用 `Continuous Patch`
> [!CAUTION]
> 我们强烈建议您不要使用此版本。它仍然存在许多安全漏洞。

  - Fork 此仓库。
  - 使用 Continuous Patch 需要设置一个名为 `LATEST_PATCHED_VERSION` 的 `Repository Variable`，您应填写当前在 [Release History](https://www.telerik.com/support/whats-new/fiddler-everywhere/release-history) 中最新的版本号，但不带 'V'，例如：`5.17.0`。
  - Continuous Patch 会修补 `LATEST_PATCHED_VERSION` 之后发布的新版本。***目前您需要在修补新版本后手动更新此仓库变量，否则它每天都会重复修补同一版本！***
  - 该工作流每天 UTC 00:00 触发，如果发现新版本，artifact 会被上传。
    > 注意：目前此操作不会将修补后的应用程序作为 release 上传。因此，您需要手动检查是否有新版本已修补，并查看已运行操作的 artifact 部分。
  - 如果 Telerik 上传了新版本，并且已通过连续触发修补，下载名为 `Fiddler-Everywhere-VX.X.X-Patched` 的 artifact。
  - 解压缩并运行它。

  > [!WARNING]
  > 我们强烈建议您禁用此工作流修补，因为它会消耗 GitHub Action 运行器的许多资源，且您可能不会喜欢频繁的工作流运行。

> [!NOTE]
> 对于通用 `Linux` 和 `MacOS` 的说明，请参见 [源仓库](https://github.com/msojocs/fiddler-everywhere-enhance)。

> [!CAUTION]
> 请不要将此补丁用于非法目的。如果可以的话，希望您支持官方产品：[请支持](https://www.telerik.com/purchase/fiddler)。
