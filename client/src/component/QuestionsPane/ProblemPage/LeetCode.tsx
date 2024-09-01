
import React, { useState } from 'react';
import { Box, Button, List, ListItem, ListItemText, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { useEffect } from 'react';
interface ProjectFile {
     name: string;
     content: string;
}

interface LeetCodeProps {
     onFileSelect: (file: ProjectFile) => void;
     onAddFile: (file: ProjectFile) => void;
     files: ProjectFile[];
}

const LeetCode: React.FC<LeetCodeProps> = ({ onFileSelect, onAddFile, files }) => {
     const [openDialog, setOpenDialog] = useState(false);
     const [newFileName, setNewFileName] = useState('');
     const [localFiles, setLocalFiles] = useState<ProjectFile[]>(files);

     useEffect(() => {
          setLocalFiles(files);
     }, [files]);

     const handleAddFile = () => {
          if (newFileName) {
               const newFile: ProjectFile = { name: newFileName, content: '' };
               onAddFile(newFile);
               setNewFileName('');
               setOpenDialog(false);
               setLocalFiles(prevFiles => [...prevFiles, newFile]);
          }
     };

     return (
          <Box>
               <h1>Files</h1>
               <Button style={{ "backgroundColor": "#00621e", "color": "white" }} variant="text" onClick={() => setOpenDialog(true)}>Add File</Button>
               <List>
                    {localFiles.map((file, index) => (
                         <ListItem button key={index} onClick={() => onFileSelect(file)}>
                              <ListItemText primary={file.name} />
                         </ListItem>
                    ))}
               </List>
               <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                    <DialogTitle>Add New File</DialogTitle>
                    <DialogContent>
                         <TextField
                              autoFocus
                              margin="dense"
                              label="File Name"
                              fullWidth
                              value={newFileName}
                              onChange={(e) => setNewFileName(e.target.value)}
                         />
                    </DialogContent>
                    <DialogActions>
                         <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                         <Button onClick={handleAddFile} variant="text">Add</Button>
                    </DialogActions>
               </Dialog>
          </Box>
     );
};

export default LeetCode;
