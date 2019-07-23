const inOrder = (currentNode) => {
    if (currentNode.left) {
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if (currentNode.right) {
        inOrder(currentNode.right)
    }
}

const findOrAdd = (rootNode, newNode) => {
    debugger
    if (newNode.data < rootNode.data) {
        if (rootNode.left) {
            return findOrAdd(rootNode.left, newNode)
        } else {
            rootNode.left = newNode
        }
    } else if (newNode.data === rootNode.data) {
        return true
    } else {
        if (rootNode.right) {
            return findOrAdd(rootNode.right, newNode)
        } else {
            rootNode.right = newNode
        }
    }
}

const max = (rootNode) => {
    if (rootNode.right) {
        return max(rootNode.right)
    } else {
        return rootNode
    }
}

const min = (rootNode) => {
    if (rootNode.left) {
        return min(rootNode.left)
    } else {
        return rootNode
    }
}