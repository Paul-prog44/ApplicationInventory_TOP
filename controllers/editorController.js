const getEditors = async (req, res) => {
    try {
        const editors = await fetchEditors()
    } catch (error) {
        res.render('error', { error: error })
    }
}

const getEditor = async (req, res) => {
    const editorId = req.params.id

    try {
        const editor = await fetchEditor()
    } catch (error) {
        res.render('error', { error: error })
    }
}

module.exports = { getEditors, getEditor }