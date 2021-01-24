import { Fragment, useState } from 'react'
import { Box } from '@chakra-ui/react'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'

const editorOptions = {
    'mode': 'classic',
    'rtl': false,
    'videoFileInput': false,
    'tabDisable': false,
    buttonList: [
        ['undo', 'redo'],
        [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['fontColor', 'hiliteColor', 'textStyle'],
        ['removeFormat'],
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print'],
        ['-right', ':r-More Rich-default.more_plus', 'table'],
        ['-right', 'image', 'video', 'audio', 'link'],
        ['%992', [
            ['undo', 'redo'],
            [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
            ['bold', 'underline', 'italic', 'strike'],
            [':t-More Text-default.more_text', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle'],
            ['removeFormat'],
            ['outdent', 'indent'],
            ['align', 'horizontalRule', 'list', 'lineHeight'],
            ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print'],
            ['-right', ':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video', 'audio']
        ]],
        ['%767', [
            ['undo', 'redo'],
            [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
            [':t-More Text-default.more_text', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle'],
            ['removeFormat'],
            ['outdent', 'indent'],
            [':e-More Line-default.more_horizontal', 'align', 'horizontalRule', 'list', 'lineHeight'],
            [':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video', 'audio'],
            ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print']
        ]],
        ['%480', [
            ['undo', 'redo'],
            [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
            [':t-More Text-default.more_text', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle', 'removeFormat'],
            [':e-More Line-default.more_horizontal', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'lineHeight'],
            [':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video', 'audio'],
            ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print']
        ]]
    ]
}

const TextareaWithSunEditor = props => {
    const [editorContent, setEditorContent] = useState('')
    const onEditorContentChange = editorContent => setEditorContent(editorContent)

    return (
        <Fragment>
            <Box
                h='xs'
                borderWidth={1}
                borderColor='gray.300'
                rounded='5px'
                overflow='auto'
                overflowWrap='anywhere'
            >
                <SunEditor
                    setOptions={editorOptions}
                    ref={props.refFormHook}
                    name='description'
                    defaultValue={editorContent}
                    setContents={editorContent}
                    onChange={onEditorContentChange}
                    {...props.restOfStyles}
                />
            </Box>
        </Fragment>
    )
}

export default TextareaWithSunEditor
