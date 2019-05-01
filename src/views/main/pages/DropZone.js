import React, { Component, createRef, useMemo } from 'react'
import ContentCard from 'components/ContentCard';
import ContentRow from 'components/ContentRow';
import ContentCol from 'components/ContentCol';
import ReactDropzone from 'react-dropzone';
import { Button } from 'reactstrap';

export default class DropZone extends Component {

    constructor(props) {
        super(props);
    
        this.dropzoneRef = createRef();
    }

    onDropAccepted = (acceptedFiles) => {
        var msg = '';
        let formData = new FormData();
        acceptedFiles.map((file, i) => {
            msg += file.name + '\n';
            formData.append('sourceFile', file);
        });
        msg += 'accepted';
        alert(msg);
        console.log(formData);

        fetch(`http://localhost:8080/api/file`, {
            method: 'POST',
            body: formData
          })
          .then(res => res.json())
          .then(images => {
            console.log(images);
          })
    }

    onDropRejected = (rejectedFiles) => {
        var msg = '';
        rejectedFiles.map(file => {
            msg += file.name + '\n';
        });
        msg += 'rejected';
        alert(msg);
    }

    openDialog = () => {
        if (this.dropzoneRef.current) {
            this.dropzoneRef.current.open();
        }
    }

    render() {
        const fileMaxSize = 102400; // unit in bytes. (102400Byte -> 100KB)
        return (
            <ContentCard title='Drop Zone'>
                <ContentRow>
                    <ContentCol>
                        {/* // Disable click and keydown behavior on the <Dropzone> */}
                        <ReactDropzone 
                            ref={this.dropzoneRef} 
                            noClick 
                            noKeyboard
                            accept=".csr"
                            minSize={0}
                            maxSize={fileMaxSize}
                            multiple={false}
                            onDropAccepted={this.onDropAccepted}
                            onDropRejected={this.onDropRejected}
                            disabled={false}
                        >
                            {({getRootProps, getInputProps, rejectedFiles, isDragActive, isDragReject}) => {
                                const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > fileMaxSize;
                                return (
                                    <div {...getRootProps({
                                        className: 'dropzone',
                                        ...(isDragActive ? {className: 'dropzone-active'} : {}),
                                        })}>
                                        <input {...getInputProps()} />
                                        {!isDragActive && <p>Drop a file here</p>}
                                        {isDragActive && !isDragReject && <p>Drop it like it's hot!</p>}
                                        {isFileTooLarge && <p style={{color:'red'}}>File to large!</p>}
                                        <Button color="primary" onClick={this.openDialog} disabled={false}>
                                            Open File Dialog
                                        </Button>
                                    </div>
                                );
                            }}
                        </ReactDropzone>
                    </ContentCol>
                </ContentRow>
            </ContentCard>
        )
    }
}
