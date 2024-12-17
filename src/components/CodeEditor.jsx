import { useRef, useState } from "react";
import { Box, Button, Flex, useToast, VStack } from "@chakra-ui/react";
import { executeCode } from "../api";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";


const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("python");
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState(null);


  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const result = await executeCode(language, sourceCode);
      console.log(result)
      setOutput([result.output]);
    } catch (error) {
      toast({
        title: error.status,
        description: error.error,
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w={"70%"} h={"100%"}>
      <VStack spacing={4}>
        <Box w="95%">
          <Flex alignItems={"center"} >
            <Button
                    variant="outline"
              colorScheme="green"
              mb={4}
              color={"white"}
              isLoading={isLoading}
              onClick={runCode}
            >
              Run 
            </Button>
            <LanguageSelector language={language} onSelect={onSelect} />
          </Flex>
          <Box >
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="60vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>
        </Box>
        <Output output={output}/>
      </VStack>
    </Box>
  );
};
export default CodeEditor;
