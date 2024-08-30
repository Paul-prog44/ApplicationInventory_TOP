const { fetchEditors, addEditor, deleteEditorDb, fetchEditor, modifyEditorDb } = require("../db/queries")

const getEditors = async (req, res) => {
    try {
        let editors = await fetchEditors()
        console.log(editors)
        res.render("editors", {title : "Editors", editors : editors})
    } catch (error) {
        res.render('error', { error: error })
    }
}

const getEditor = async (req, res) => {
    const editorId = req.params.id
    try {
        let editor = await fetchEditor(editorId)
        editor = editor[0]
        res.render("editor", {title: "Editor "+ editor.name, editor : editor})
    } catch (error) {
        res.render('error', { error: error })
    }
}

const createEditor = async(req, res) => {
    const editor = req.body
    try {
        await addEditor(editor)
        res.redirect("/editors")
    } catch (error) {
        res.render('error', { error: error })
    }
}

const deleteEditor = async (req, res) => {
    const editorId = req.params.id
    try {
        await deleteEditorDb(editorId)
        res.redirect("/editors")
    } catch (error) {
        res.render('error', { error: error })
    }
}

const modifyEditor = async (req, res) => {
    const editor = req.body
    try {
        await modifyEditorDb(editor)
        res.redirect("/editors")
    } catch (error) {
        res.render('error', { error: error })
    }
}

module.exports = { getEditors, getEditor, createEditor, deleteEditor, modifyEditor }