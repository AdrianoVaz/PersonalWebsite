import React from 'react';

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        maxWidth: '66mm',
        paddingRight: '10px',
    },
    skillHeader: {
        marginBottom: '10px',
    },
    skill: {
        marginLeft: '15px',
    },
    aboutMe: {
        fontStyle: 'italic',
        fontSize: '16px',
    },
    aboutMeHeader: {
        marginTop: 0,
    },
};

function LeftBar() {
    return (
        <div style={styles.container}>
            <h2 style={styles.aboutMeHeader}>
                    About me:
            </h2>
            <div style={styles.aboutMe}>

                "I am a very nice person ;) then hire me and pay me.
                Btw I accept tips aswell"

            </div>
            <div>
                <h3 style={styles.skillHeader}>
                    Fluent in:
                </h3>
                <div style={styles.skill}>
                    <div>
                        Portuguese
                    </div>
                    <div>
                        English
                    </div>
                </div>
            </div>
            <div>
                <h3 style={styles.skillHeader}>
                    Skills:
                </h3>
                <div style={styles.skill}>
                    <div>
                        Python
                    </div>
                    <div>
                        PHP
                    </div>
                    <div>
                        HTML
                    </div>
                    <div>
                        CSS
                    </div>
                    <div>
                        Google Fu
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBar;
