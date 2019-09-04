import React from 'react';

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        maxWidth: '132mm',
        borderLeft: 'solid 1px darkgrey',
        paddingLeft: '24px',
    },
    header: {
        marginTop: 18,
        marginBottom: 0,
    },
    descriptionComponent: {
        marginBottom: '16px',
    },
    personalInterestsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '16px',
        justifyContent: 'space-between',
    },
};

function RightBar() {
    return (
        <div style={styles.container}>
            <div>
                <h2 style={styles.header}>
                    Professional Experience
                </h2>
                <div style={styles.descriptionComponent}>
                    <b>(2016/2018) </b>
                        - Remote fullstack developer at Activementis
                    <br />
                    <b>(2010/2014) </b>
                        - Customer service
                    <br />
                    <b>(2009) </b>
                        - Internship at Faro Airport, as a
                        Computer Networks and Hardware Technician
                    <br />
                </div>
            </div>
            <div>
                <h2 style={styles.header}>
                    Workshops and Events
                </h2>
                <div style={styles.descriptionComponent}>
                    <b>(2019) </b>
                        - FreeCodeCamp
                    <br />
                    <b>(2018) </b>
                        - Faro Dev Day – Turbine Kreuzberg
                    <br />
                    <b>(2018) </b>
                        - Shift Faro – University of Algarve
                    <br />
                    <b>(2017) </b>
                        - Pixels Camp
                    <br />
                    <b>(2017) </b>
                        - Node.js Workshop – University of Algarve
                    <br />
                    <b>(2017) </b>
                        - The Hackathon Miracle Day – VOTUM
                    <br />
                    <b>(2015) </b>
                        - Python Workshop – University of Algarve
                    <br />
                    <b>(2015) </b>
                        - Unity Workshop – University of Algarve
                    <br />
                </div>
            </div>
            <div>
                <h2 style={styles.header}>
                    Organizations
                </h2>
                <div style={styles.descriptionComponent}>
                    <b>(2018) </b>
                        - Festas de Programação – Monitoring assistant for evaluation tests of Prof. Pedro Guerreiro - FCT - UALG
                    <br />
                    <b>(2016) </b>
                        - TOPAS Sul – Assistant in a programming competition for students - University of Algarve
                    <br />
                    <b>(2016) </b>
                        - NEI Lan Party – Organization team - University of Algarve
                    <br />
                    <b>(2015/2017) </b>
                        - Member of the Pedagogical Council of FCT - University of Algarve
                    <br />
                    <b>(2015/2017) </b>
                        - Representative of the Course – Bachelor of Computer Engineering, University of Algarve
                    <br />
                    <b>(2015) </b>
                        - Mistuna – Organization team, Real Tuna Infantina
                    <br />
                </div>
                <div>
                    <h2 style={styles.header}>
                    Personal Interests
                    </h2>
                    <div style={styles.personalInterestsContainer}>
                        <div>
                            - Psychology
                            <br />
                            - Teaching others
                            <br />
                            - Long walks
                            <br />
                            - Videogames
                            <br />
                        </div>
                        <div>
                            - Music and Instruments
                            <br />
                            - Chess
                            <br />
                            - Cats 😻
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightBar;
