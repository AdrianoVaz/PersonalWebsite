import React from 'react';

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        maxWidth: '66mm',
        paddingRight: '10px',
        backgroundColor: '#cbd0d8',
        paddingLeft: '24px',
        paddingRight: '24px',
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
    spacedContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    },
};

function LeftBar() {
    return (
        <div style={styles.container}>
            <div style={styles.spacedContainer}>
                <h2 style={styles.aboutMeHeader}>
                    About me:
                </h2>
                <div style={styles.aboutMe}>
             "Although somewhat inexperienced, I adapt quickly to
            new environments while maintaining a great passion to learn which
             I believe will make me a good asset in the long run."

                </div>
            </div>
            <div style={styles.spacedContainer}>
                <h2 style={styles.skillHeader}>
                    Education
                </h2>
                <div style={styles.skill}>
                    <div>
                        <b>(2017/present) </b>
                        - Masters of Computer Engineering, University of Algarve.
                    </div>
                    <div>
                        <b>(2014/2017) </b>
                        - Bachelor of Computer Engineering, University of Algarve.
                    </div>
                </div>
            </div>
            <div style={styles.spacedContainer}>
                <h2 style={styles.skillHeader}>
                    Skills:
                </h2>
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
                        GIT
                    </div>
                    <div>
                        Google Fu
                    </div>
                </div>
            </div>
            <div style={styles.spacedContainer}>
                <h2 style={styles.skillHeader}>
                    Fluent in:
                </h2>
                <div style={styles.skill}>
                    <div>
                        Portuguese
                    </div>
                    <div>
                        English
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBar;
