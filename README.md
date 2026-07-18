# 悖论图鉴 · Paradox Atlas

一个无需后端、可直接部署到 Netlify 的交互式悖论知识网站。

## 项目地址

- GitHub：<https://github.com/weepwood/paradox-atlas>
- Netlify 预留地址：<https://paradox-atlas.netlify.app>
- 原始 Notion 文档：<https://app.notion.com/p/3a0db2844e78814cbff3f4a403a023ab>

> Netlify 项目已经创建。首次生产部署需要完成仓库关联，之后推送到 `main` 分支会自动部署。

## 功能

- 30 个经典悖论，覆盖六大领域
- 分类筛选、全文搜索、随机探索
- 卡片弹窗式深度阅读
- 蒙提霍尔模拟器
- 生日碰撞概率计算器
- 希尔伯特旅馆动画演示
- 囚徒困境收益矩阵
- 响应式布局、明暗主题、无障碍与减少动画适配

## 技术实现

- HTML5
- CSS3
- 原生 JavaScript
- Netlify 静态托管

项目没有后端和构建依赖，下载后即可直接运行。

## 本地运行

```bash
python -m http.server 8080
```

然后打开 `http://localhost:8080`。

## Netlify 部署设置

项目根目录包含 `netlify.toml`：

- Build command：留空
- Publish directory：`.`
- Production branch：`main`

将 Netlify 项目关联到 `weepwood/paradox-atlas` 后，即可启用持续部署。
