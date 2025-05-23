// Requires lib/dom.js + app

window.icons = {
    import(deps) { Object.assign(this.imports ||= {}, deps) },

    create(name, { size = 16, width, height, ...additionalAttrs } = {}) {
        const iconData = icons[name],
              iconAttrs = { width: width || size, height: height || size, ...additionalAttrs }
        if (iconData.type == 'svg') {
            const svg = dom.create.svgElem('svg', { viewBox: iconData.viewBox, ...iconAttrs  })
            iconData.elems.forEach(([tag, attrs]) => svg.append(dom.create.svgElem(tag, attrs)))
            return svg
        } else // img w/ src
            return dom.create.elem('img', { src: iconData.src, ...iconAttrs })
    },

    caretDown: {
        type: 'svg', viewBox: '0 0 24 24',
        elems: [[ 'path', { d: 'm0 6.4 12 12 12-12z' }]]
    },

    plus: {
        type: 'svg',  viewBox: '0 0 1024 1024',
        elems: [
            [ 'path', { d: 'M899.901 600.38H600.728v299.173c0 74.383-179.503 74.383-179.503 0V600.38H122.051c-74.384 0-74.384-179.503 0-179.503h299.173V121.703c0-74.384 179.503-74.384 179.503 0v299.174H899.9c74.385 0 74.385 179.503.001 179.503z' }]
        ]
    },

    questionMark: {
        type: 'png',
        get src() { return `${icons.imports.app.urls.assetHost.replace(
            '@latest', '@00e245b')}/images/icons/question-mark/icon16.png` }
    }
};
