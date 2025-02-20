
## 🚀 简介

`Go-Cesium-View` 是一个为 **go-view 低代码平台** 设计的 Cesium 3D地理可视化组件库，提供开箱即用的地图、模型、数据可视化组件。通过拖拽式配置，无需复杂编码即可快速搭建以下场景：


- **3D地球/地图**（支持多种底图、地形服务）
- **数据可视化**（动态轨迹、热力图、点云等）
- **三维模型集成**（倾斜摄影、BIM、GLTF模型）
- **地理分析工具**（测量、空间查询、地形分析）

![快捷主页](readme/go-view-indexpage.jpg)

## ✨ 核心特性

### 低代码友好
- **可视化配置**：通过 JSON 或 UI 界面快速生成 Cesium 场景
- **预设模板**：提供常见地理场景模板（如智慧城市、轨迹监控）
- **一键生成代码**：将配置导出为可复用的 Vue/React 组件

### 功能丰富
- 🌍 支持 **Cesium 原生功能**（影像图层、地形、3D Tiles）
- 📊 集成 **数据驱动可视化**（GeoJSON、CSV、实时API）
- 🛠️ 内置 **工具组件**（地图工具栏、视角控制器、坐标拾取）

### 企业级支持
- 🛡️ 安全性：支持 Token 鉴权、数据加密
- 🚄 高性能：大规模数据渲染优化
- 📦 模块化：按需加载组件，减少打包体积

![工作台](readme/go-view-canvas.jpg)


## 技术栈：

| 名称                | 版本  | 名称        | 版本   |
| ------------------- | ----- | ----------- | ------ |
| Cesium              | 1.126 | 
| Vue                 | 3.2.x | TypeScript4 | 4.6.x  |
| Vite                | 4.2.x | NaiveUI     | 2.34.x |
| ECharts             | 5.3.x | Pinia       | 2.0.x  |
| 详见 `package.json` | 😁    | 🥰          | 🤗     |

## 开发环境:

| 名称 | 版本    | 名称    | 版本  |
| ---- | ------- | ------- | ----- |
| node | 18.20.x | npm     | 10.7.x|
| pnpm | 8.6.7   | windows | 10    |

## 安装
```
# 1. 安装 pnpm
npm install -g pnpm

# 2. 安装项目依赖
pnpm install

# 3. 启动
pnpm dev

# 4. 编译
pnpm run build
```
## 联系我
- QQ： 1264710065
- 微信：trampjwl

## 主页：
![快捷主页](readme/go-view-indexpage.jpg)

## 工作台：
![工作台](readme/go-view-canvas.jpg)

## 色彩：
![工作台](readme/go-view-echarts-color.jpg)

## 事件：
![工作台](readme/go-view-event.jpg)
