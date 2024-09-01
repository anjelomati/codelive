import React from 'react';
import LeetCode from './LeetCode';

interface ProjectFile {
     name: string;
     content: string;
}

interface ProblemPageProps {
     onFileSelect: (file: ProjectFile) => void;
     onAddFile: (file: ProjectFile) => void;
     files: ProjectFile[];
}

const ProblemPage: React.FC<ProblemPageProps> = ({ onFileSelect, onAddFile, files }) => {
     return (
          <div style={{ margin: "1rem" }}>
               <LeetCode onFileSelect={onFileSelect} onAddFile={onAddFile} files={files} />
          </div>
     );
};

export default ProblemPage;