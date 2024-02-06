import { table, getBorderCharacters } from 'table';
import {
    ABOUT_TEXT,
    EXPERIENCE_SHORT_CV,
    SOCIAL,
    CONTACT,
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
            ['social', 'social media links'],
            ['matrix', 'boot the matrix'],
        ],
        this.borderlessTable,
    );
    
    techExp = () => {
        const year = new Date().getFullYear();
        const linux = 2016;
        const js = 2016;
        const python = 2018;
        const docker = 2019;
        const react = 2018;
        const c = 2016;

        const expStr = (y) => `${y}+`;

        const data = [
            ['Technology', 'Years of experience'],
            ['Linux', expStr(year - linux)],
            ['JavaScript / Ts', expStr(year - js)],
            ['Python', expStr(year - python)],
            ['Docker / Swarm / k8s', expStr(year - docker)],
            ['React', expStr(year - react)],
            ['C', expStr(year - c)],
        ];

        return table(data, {
            border: getBorderCharacters('ramac'),
        });
    }

    experience = () => table(EXPERIENCE_SHORT_CV, {
            border: getBorderCharacters('ramac'),
    });

    aboutMeText = () => table([[ABOUT_TEXT]], this.textParagraphTable) 

    about = () => `${this.aboutMeText()}\n\nExperience:\n${this.experience()}\n\nTechnologies:\n${this.techExp()}\n\nMy resume: https://uflorida-my.sharepoint.com/:b:/g/personal/agajjar_ufl_edu/EeVzpTskByBPsuUwvaz47wMBtkiv7bEhXMomgg4P6vgKvw?e=MORKxI`;

    projectsHelpTable = () => table([], this.borderlessTable);

    projectsHelp = () => `Usage: projects <SUBCOMMAND>
A list of projects and deliverables I have worked on at each company.

SUBCOMMANDS:
${this.projectsHelpTable()}`;

    projects = (args) => {
        const [_, company] = args;
        switch (company) {
            default:
                return this.projectsHelp();
        }
    }
    
    contact = () => table(CONTACT, this.borderlessTable);
    
    social = () => table(SOCIAL, this.borderlessTable);
    
    matrix = () => 'booting the matrix...';

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
            case 'matrix':
                return this.matrix();
            default:
                return this.notFound(arg1);
        }
    }
}

export default AkaSH;