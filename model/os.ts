import { table, getBorderCharacters } from 'table';
import {
    ABOUT_TEXT,
    EXPERIENCE_SHORT_CV,
    INTERNSHIP_SHORT_CV,
    SOCIAL,
    CONTACT,
    PROJECTS,
} from '../helpers/os-data';

class AkaSH {
    borderlessTable: any;
    projectsTable: any;
    textParagraphTable: any;

    constructor() {
        this.borderlessTable = {
            border: getBorderCharacters('void'),
            columnDefault: {
                paddingLeft: 0,
                paddingRight: 1,
            },
            columns: [ { width: 20 }, { width: 50 } ],
            drawHorizontalLine: () => false,
        }

        this.projectsTable = {
            border: getBorderCharacters('ramac'),
            columnDefault: {
                paddingLeft: 0,
                paddingRight: 1,
            },
            columns: [ { width: 25 }, { width: 55 } ],
        }

        this.textParagraphTable = {
            border: getBorderCharacters('void'),
            columns: [ { width: 75 }],
            columnDefault: {
                paddingLeft: 0,
            },
            drawHorizontalLine: () => false,
        }
    }

    notFound = (cmd) => `${cmd}: command not found. Type "help" to get started.`;
    
    help = () => table(
        [
            ['aka.sh', ''],
            ['', ''],
            ['Usage:', ''],
            ['help', 'this message or help for a specific command'],
            ['about', 'short about me, experience, cv'],
            ['projects', 'projects I have worked on'],
            ['contact', 'contact information'],
            ['social', 'social media links']
        ],
        this.borderlessTable,
    );
    
    experience = (experienceTable) => table(experienceTable, {
            border: getBorderCharacters('ramac'),
    });

    aboutMeText = () => table([[ABOUT_TEXT]], this.textParagraphTable) 

    about = () => `${this.aboutMeText()}\n\nExperience:\n${this.experience(EXPERIENCE_SHORT_CV)}\n\nInternships:\n${this.experience(INTERNSHIP_SHORT_CV)}\n\nMy resume: https://uflorida-my.sharepoint.com/:b:/g/personal/agajjar_ufl_edu/EeVzpTskByBPsuUwvaz47wMBtkiv7bEhXMomgg4P6vgKvw?e=MORKxI`;

    projectsHelpTable = () => table(PROJECTS, {
        border: getBorderCharacters('ramac')
    });

    projectsHelp = () => this.projectsHelpTable();

    projects = (args) => {
        const [_, company] = args;
        switch (company) {
            default:
                return this.projectsHelp();
        }
    }
    
    contact = () => table(CONTACT, this.borderlessTable);
    
    social = () => table(SOCIAL, this.borderlessTable);
    
    /**
     * Execute command
     * @param {string[]} command
     * @returns 
     */
    cmd = (command) => {
        if (!command || command.length === 0) {
            return null;
        }

        const [ arg1 ] = command;
        switch (arg1) {
            case 'help':
                return this.help();
            case 'about':
                return this.about();
            case 'projects':
                return this.projects(command);
            case 'contact':
                return this.contact();
            case 'social':
                return this.social();
            default:
                return this.notFound(arg1);
        }
    }
}

export default AkaSH;