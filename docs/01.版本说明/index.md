---
title: 版本说明
date: 2023-06-25 09:22:36
permalink: /version/
sidebar: true
article: false # 是否未非文章页，非文章不显示 面包屑和作者、时间，不显示最近更新栏，不会参与到最近更新文章的数据计算中
comment: false # 评论区
editLink: false
---

## easy-security 2.0.0
这一版我们做了很伟大的事情，改变了架构，并支持了功能扩展，详细如下：
1. 整体架构改变，从多链路过滤器改为单链路过滤器
2. 提供 FunctionHandler 接口，方便功能扩展
3. 对加密接口CiphertextServer进行重构，直接重写加密
4. 对 RequestWrapper 等类进行重命名

## easy-security 1.0.0
初版