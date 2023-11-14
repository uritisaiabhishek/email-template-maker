import React, { useEffect, useRef } from 'react';

import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';

import '../assets/sass/styles.scss';

function Builderpage() {
    const editorRef = useRef(null);
    let data = JSON.parse(localStorage.getItem('dataArr'));
    console.log(data);
    useEffect(() => {
      const editor = grapesjs.init({
        height: "calc(100vh - 70px)",
        container: editorRef.current,
        blockManager: {
          blocks: data,
        },
        // Customize the export settings
        storageManager: {
          type: 'none',
        },
        assetManager: {
          embedAsBase64: true,
        },
        plugins: ['grapesjs-preset-webpage'],
        pluginsOpts: {
          'grapesjs-preset-webpage': {
            inlineCss: true, // Enable inline CSS
            // Other options for the webpage preset
          },
        },
      });
      // Make blocks editable
  editor.on('component:selected', (model) => {
    const isEditable = model.get('editable');
    if (isEditable) {
      editor.Commands.run('core:editContent', { forceEdit: true });
    }
  });
      // You can configure GrapesJS further and add plugins/settings as needed.
      return () => {
        // Clean up the GrapesJS instance when the component unmounts
        editor.destroy();
      };
    }, [data]);
    
    return <div ref={editorRef}></div>;
}

export default Builderpage