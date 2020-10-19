import React from 'react'
import './FormattingMenu.css';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';

function FormattingMenu() {
    return (
        <div className="formattingMenu">
                <UndoIcon/>
                <RedoIcon/>
                <FormatSizeIcon/>
                <FormatBoldIcon/>
                <FormatItalicIcon/>
                <FormatUnderlinedIcon/>
                <FormatUnderlinedIcon/>
        </div>
    )
}

export default FormattingMenu
