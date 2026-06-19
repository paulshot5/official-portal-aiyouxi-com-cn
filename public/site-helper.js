// public/site-helper.js
(function() {
    'use strict';

    // 配置数据
    const config = {
        portalUrl: 'https://official-portal-aiyouxi.com.cn',
        keyword: '爱游戏',
        cardTitle: '欢迎来到爱游戏平台',
        badgeLabels: ['热门', '推荐', '新游']
    };

    // 工具函数：创建元素并添加类名
    function createElement(tag, className, textContent) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (textContent) el.textContent = textContent;
        return el;
    }

    // 生成提示卡片
    function createTipCard() {
        const card = createElement('div', 'tip-card');
        const title = createElement('h3', 'tip-card-title', config.cardTitle);
        const desc = createElement('p', 'tip-card-desc', '探索更多好玩的内容，点击下方按钮访问官方网站。');
        const link = createElement('a', 'tip-card-link', '前往官网');
        link.href = config.portalUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(link);
        return card;
    }

    // 生成关键词徽章组
    function createBadgeGroup() {
        const group = createElement('div', 'badge-group');
        const label = createElement('span', 'badge-label', config.keyword + '：');
        group.appendChild(label);
        config.badgeLabels.forEach(function(text) {
            const badge = createElement('span', 'badge-item', text);
            group.appendChild(badge);
        });
        return group;
    }

    // 生成访问说明
    function createAccessInfo() {
        const info = createElement('div', 'access-info');
        const heading = createElement('h4', 'access-info-title', '访问说明');
        const list = createElement('ul', 'access-info-list');
        const items = [
            '本页面为演示页面，所有内容仅供测试。',
            '点击卡片链接可跳转至 ' + config.portalUrl,
            '关键词“' + config.keyword + '”为示例展示。',
            '请遵守当地法律法规，合理使用网络资源。'
        ];
        items.forEach(function(text) {
            const li = createElement('li', 'access-info-item', text);
            list.appendChild(li);
        });
        info.appendChild(heading);
        info.appendChild(list);
        return info;
    }

    // 初始化整个页面组件
    function initSiteHelper() {
        // 找到或创建容器
        let container = document.getElementById('site-helper-container');
        if (!container) {
            container = createElement('div', 'site-helper-container');
            document.body.appendChild(container);
        }

        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            .site-helper-container {
                max-width: 600px;
                margin: 20px auto;
                padding: 20px;
                background: #f9f9f9;
                border: 1px solid #ddd;
                border-radius: 8px;
                font-family: Arial, sans-serif;
            }
            .tip-card {
                background: #fff;
                border: 1px solid #eee;
                border-radius: 6px;
                padding: 16px;
                margin-bottom: 20px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            }
            .tip-card-title {
                margin: 0 0 8px 0;
                font-size: 18px;
                color: #333;
            }
            .tip-card-desc {
                margin: 0 0 12px 0;
                font-size: 14px;
                color: #666;
            }
            .tip-card-link {
                display: inline-block;
                padding: 8px 16px;
                background: #007bff;
                color: #fff;
                text-decoration: none;
                border-radius: 4px;
                font-size: 14px;
            }
            .tip-card-link:hover {
                background: #0056b3;
            }
            .badge-group {
                margin-bottom: 20px;
            }
            .badge-label {
                font-weight: bold;
                margin-right: 8px;
                color: #555;
            }
            .badge-item {
                display: inline-block;
                padding: 4px 10px;
                margin: 0 4px 4px 0;
                background: #e7f3ff;
                color: #007bff;
                border-radius: 12px;
                font-size: 12px;
            }
            .access-info {
                background: #fff;
                border: 1px solid #eee;
                border-radius: 6px;
                padding: 16px;
            }
            .access-info-title {
                margin: 0 0 8px 0;
                font-size: 16px;
                color: #333;
            }
            .access-info-list {
                margin: 0;
                padding-left: 20px;
            }
            .access-info-item {
                font-size: 13px;
                color: #555;
                margin-bottom: 4px;
            }
        `;
        document.head.appendChild(style);

        // 组装组件
        container.appendChild(createTipCard());
        container.appendChild(createBadgeGroup());
        container.appendChild(createAccessInfo());
    }

    // 在 DOM 加载完成后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSiteHelper);
    } else {
        initSiteHelper();
    }
})();