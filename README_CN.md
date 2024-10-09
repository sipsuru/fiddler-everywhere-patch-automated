## [ENGLISH](README.md)

# Fiddler Everywhere Patch（自动）
指导您在 Windows 上自动破解 Fiddler Everywhere。  
> 父仓库：https://github.com/msojocs/fiddler-everywhere-enhance

## 特别说明：您也可以手动破解。访问 [此仓库](https://github.com/sipsuru/fiddler-everywhere-patch-manual)

## 是什么以及如何操作？
这是一个用于 Telerik Fiddler Everywhere 的破解（实际上是补丁）。它可以为您提供一个不会过期的试用版。该试用版包含所有功能。  
这是关于如何自动应用补丁的指南。

![无限试用](https://github.com/user-attachments/assets/e9c83778-27fa-456a-96e6-07bb0cd7f4ad)

## 开始使用。

> [!IMPORTANT]  
> 无法下载适用于 FE 5.17.0 以下版本的 Yukihana Patch（因为文件名仍包含 `yukihana` 而不是 `yui`，除非使用 `Yui-Patch 1.1.3 +`）。

> [!IMPORTANT]  
> 无法下载适用于所有 FE 版本的 Yui Patch（因为组织和仓库名已从 `Yukihana` 重命名为 `Yui`），问题已修复。

> [!IMPORTANT]  
> 无法下载适用于 5.17.0 + 版本的 Yukihana Patch（因为连续发布和最新发布不包含 Windows 补丁），问题已修复。

> [!IMPORTANT]  
> 当您通过“自定义版本 - Workflow Dispatch”触发时，未对 5.17.0 + 版本进行补丁，问题已修复！

> [!TIP]  
> 您必须始终检查您的 fork 是否是最新的，以避免失败。

> [!NOTE]  
> 仅适用于 Windows！

* 这个自动化补丁究竟是如何工作的？  
  - 实际上，这个自动化补丁执行的操作与您手动打补丁的操作相同。它下载 Fiddler Everywhere 并解压。删除、替换、编辑、移动文件，之后应用补丁后的程序即可使用。

* Continuous 或 Workflow Dispatch？或者 Workflow Dispatch 最新版？  
  - 最新版本 - Workflow Dispatch - 对最新版本进行补丁，并上传为工件。  
  - 自定义版本 - Workflow Dispatch - 允许您选择一个兼容版本（5.9.0 +），进行补丁并上传为工件。

> [!TIP]  
> 我们强烈推荐您使用***最新版本 - Workflow Dispatch***，它会对最新的可用版本打补丁。  
> ***自定义版本 - Workflow Dispatch*** 也允许您选择从 5.9.0 + 开始的版本。

### 使用 `Latest Version - Workflow Dispatch`
[![](https://github.com/sipsuru/fiddler-everywhere-patch-automated/actions/workflows/cp__latest_dispatch.yml/badge.svg)](https://github.com/sipsuru/fiddler-everywhere-patch-automated/actions/workflows/cp__latest_dispatch.yml)


- Fork 此仓库。  
- 转到 actions 标签，选择 `Latest Version - Workflow Dispatch` 工作流。  
- 使用 `workflow dispatch` 触发它。  
- 触发成功后，下载名为 `Fiddler-Everywhere-VX.X.X-Patched` 的工件。  
- 解压它，运行它。

* *操作步骤如下...*

  https://github.com/user-attachments/assets/437c3448-1ea2-4c99-9123-e56b1665a37b

### 使用 `Custom Version - WorkFlow Dispatch`
[![](https://github.com/sipsuru/fiddler-everywhere-patch-automated/actions/workflows/cp_dispatch.yml/badge.svg)](https://github.com/sipsuru/fiddler-everywhere-patch-automated/actions/workflows/cp_dispatch.yml)

- Fork 此仓库。  
- 转到 actions 标签，选择 `Custom Version - Workflow Dispatch` 工作流。  
- 提供您要打补丁的版本并通过 `workflow dispatch` 触发它。  
- 触发成功后，下载名为 `Fiddler-Everywhere-VX.X.X-Patched` 的工件。  
- 解压它，运行它。

> [!WARNING]  
> 请注意，仅支持 5.9.0 及以上的版本 `(5.9.0 +)`。

> 您可以在这里找到发布列表 - [发布历史](https://www.telerik.com/support/whats-new/fiddler-everywhere/release-history)

* *操作步骤如下...*

  https://github.com/user-attachments/assets/1e9fa214-b9c9-469c-83f0-e5ae4527d2f7

> [!NOTE]  
> 对于通用的 `Linux` 和 `MacOS` 说明，请使用 [源仓库](https://github.com/msojocs/fiddler-everywhere-enhance)。

> [!CAUTION]  
> 请不要将此补丁用于非法用途。如果您能购买并支持官方，我们将不胜感激：[请支持](https://www.telerik.com/purchase/fiddler)。
