import React from 'react';

const linkedInIcon = require('../../images/linkedIn.svg');
const gitHubIcon = require('../../images/gitHub.svg');
const callMeIcon = require('../../images/callMe.svg');
const emailMeIcon = require('../../images/emailMe.svg');


const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        maxHeight: '25mm',
        marginBottom: '50px',
    },
    contactsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        maxWidth: '154mm',
        justifyContent: 'space-between',
    },
    contact: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactImage: {
        height: '18px',
        width: '18px',
        marginRight: '5px',
    },
    contactLink: {
        color: 'inherit',
        textDecoration: 'none',
    },
};

function TopBar() {
    return (
        <div style={styles.container}>
            <h1>
                Adriano Fernandes Vaz
            </h1>
            <div style={styles.contactsContainer}>
                <span style={styles.contact}>
                    <img src={emailMeIcon} style={styles.contactImage} alt="email" />
                    <a style={styles.contactLink} href="mailto:adriano_vaz@live.com.pt">adriano_vaz@live.com.pt</a>
                </span>
                <span style={styles.contact}>
                    <img src={callMeIcon} style={styles.contactImage} alt="phone" />
                    <a style={styles.contactLink} href="tel:+351967544747">967544747</a>
                </span>
                <span style={styles.contact}>
                    <img src={linkedInIcon} style={styles.contactImage} alt="linkedin" />
                    <a style={styles.contactLink} href="https://www.linkedin.com/in/adrianofvaz/">/in/adrianofvaz</a>
                </span>
                <span style={styles.contact}>
                    <img src={gitHubIcon} style={styles.contactImage} alt="gitHub" />
                    <a style={styles.contactLink} href="https://github.com/AdrianoVaz">AdrianoVaz</a>
                </span>
            </div>
        </div>
    );
}

export default TopBar;
