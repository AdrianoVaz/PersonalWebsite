import React from 'react';
// Components
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import TopBar from './components/TopBar';

const styles = {
    container: {
        color: '#1e1b18',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '296mm',
        maxWidth: '210mm',
        margin: '6mm',
        flex: 1,
    },
    bodyContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
};

function App() {
    return (
        <div style={styles.container}>
            <TopBar />
            <div style={styles.bodyContainer}>
                <LeftBar />
                <RightBar />
            </div>
        </div>
    );
}

export default App;
