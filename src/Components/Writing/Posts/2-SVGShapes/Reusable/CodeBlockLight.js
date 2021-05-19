//import SyntaxHighlighter from 'react-syntax-highlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlockLight = ({ codeString }) => {
  return (
    <SyntaxHighlighter 
      customStyle={{fontSize: '14px', background: '#eee'}}
      language="jsx"
      style={prism} 
      showLineNumbers={false} 
      lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
      wrapLines={true} 
    >
      {codeString}
    </SyntaxHighlighter>
  )
};

export default CodeBlockLight;



