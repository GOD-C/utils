(function init() {
    console.log('init')

})()

// 根据子节点向上查找所有父节点
export function treeFindPath(tree, func, path = []) {
    if (!tree) return []
    for (const data of tree) {
        // 这里按照你的需求来存放最后返回的内容吧
        path.push(data.name)
        if (func(data)) return path
        if (data.children) {
            const findChildren = treeFindPath(data.children, func, path)
            if (findChildren.length) return findChildren
        }
        path.pop()
    }
    return []
}
// treeFindPath(res, data=> data.name==='水上分局')调用
// 打印结果["湖北省","武汉市","汉阳区","水上分局"]