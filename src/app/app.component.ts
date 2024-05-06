import { Component, ViewEncapsulation } from '@angular/core';

import { AppHttpService } from './app.http-service';

export interface IAddress {
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
}

export interface IEducation {
  name: string;
  major_board: string;
  startYear: string;
  endYear: string;
  collegeName: string;
}

export interface ISkill {
  name: string;
  percent?: number;
}

export interface IProject {
  name: string;
  detail: string;
  roles?: string[]
}

export interface IExperience {
  companyName: string;
  companyAddress: IAddress;
  jobTitle: string;
  beginDate: Date;
  endDate?: Date;
  isCurrent?: boolean;
  description: string;
  projects: IProject[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  private monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  firstName = "Mohd Anas";
  lastName = "Khan";
  jobTitle = "Technical Lead";
  currentCompany = "iE3 Innovations Pvt. Ltd.";
  phoneNumber = "+91-9598979221";
  // email = "contact.mohdanaskhan@gmail.com";
  email = "samad.27.02.89@gmail.com";
  // addressLine1 = "241, Talkatora Road, Alambagh";
  addressLine1 = "Lucknow";
  // addressLine2 = "Lucknow 226005.";
  addressLine2 = "";  
  linkedin = "https://in.linkedin.com/in/mohammadanaskhan";
  github = "https://github.com/Anas9598";
  website = "https://anas9598.github.io/portfolio";


  courses: IEducation[] = [
    {
      name: "B.Tech",
      major_board: "Information Technology",
      startYear: "2008",
      endYear: "2012",
      collegeName: "Integral University, Lucknow."
    },
    {
      name: "XII",
      major_board: "CBSE",
      startYear: "2006",
      endYear: "2007",
      collegeName: "Kendriya Vidyalaya, Aligarh."
    },
    {
      name: "X",
      major_board: "ICSE",
      startYear: "2004",
      endYear: "2005",
      collegeName: "City Montessori School, Lucknow."
    }
  ];

  skills: ISkill[] = [
    {
      name: "Angular 2+ (Ver. 4-17)",
      percent: 89
    },
    {
      name: "C#",
      percent: 75
    },
    {
      name: "HTML, CSS & Javascript",
      percent: 85
    },
    {
      name: ".NET Core Web API",
      percent: 80
    },
    {
      name: "GIT",
      percent: 89
    },
    {
      name: "Problem breakdown and solving",
      percent: 90
    },
    {
      name: "Implementation and optimized algorithm",
      percent: 90
    }
  ];

  profileSummary = `IT Professional with years of experience in a fast paced environment meeting the
  organizational goals and objectives through hard work and smart skills. Able to work on own initiative
  or as part of a team and can deal with development duties competently. Seeking to work in a challenging
  position, that offers responsibilities and opportunities for advancement subsequently ensuring
  organizational and individual growth.`;

  experiences: IExperience[] = [
    {
      companyName: "iE3 Innovations Pvt. Ltd. (formerly- ISS Software Development Center Pvt. Ltd.)",
      companyAddress: {
        city: "Gurgaon",
        country: "India"
      },
      jobTitle: "Technical Lead",
      beginDate: new Date(2017, 7, 1),
      endDate: null,
      isCurrent: true,
      description: `The organization is a product-based company that deals in retail products including
                    Inventory and Point of sale solutions. I am leading a team of some very skilled developers.`,
      projects: [
        {
          name: "Back Office and POS (Product)",
          detail: `The back office product manages all the inventory and reports related solutions which is
                    mainly used by the store manager/IT support and the POS application is used by the sales
                    person and customer. Both the apps employ latest versions on Angular and .NET Core WebAPI.`,
          roles: [
            "Gather and document new requirements.",
            "Proposing timelines and creating PoC if required.",
            "Ensuring test-driven development architecture.",
            "Coding and assigning tasks.",
            "Review and code improvement feedback.",
            "Ensuring quality code and unit testing.",
            "Proposing solutions for fixing issues."
          ]
        },
        {
          name: "Research - AI solutions.",
          detail: `Research fellow for providing PoC on AI related solutions and improvements. Currently working on audio 
                    translation and transcription using Open AI's Whisper ASR and using chat completion feature for 
                    function calling.`
        }
      ]
    },
    {
      companyName: "Infosys Ltd.",
      companyAddress: {
        city: "Bangalore",
        country: "India"
      },
      jobTitle: "Systems Engineer",
      beginDate: new Date(2014, 9, 1),
      endDate: new Date(2017, 1, 1),
      isCurrent: false,
      description: `This is a leading MNC in India that deals in a variety of services and product solutions.
                    I was trained at state-of-the-art Infosys, Mysore training center with 75% result.`,
      projects: [
        {
          name: "Healthcare Insurance Project (affiliated to MetLife, U.S.)",
          detail: `The project deals in providing insurance support for the Federal employees and providers.
                  The system has various batch process that run daily/monthly/yearly as the part of updating
                  information as required. The system manages service providers and enrollees for their
                  subsequent plans and keeps track of the claims and premium. The project employs
                  ASP.NET using C#, IBM AS/400 (for batch processing) and DB2.`,
          roles: [
            "Gather and document new requirements from client.",
            "Propose solutions and timelines.",
            "Coding and review.",
            "Unit testing.",
            "Fixing bugs."
          ]
        }

      ]
    }
  ];

  hobbies = [
    "AI",
    "GPTs and LLMs",
    "Traveling & Riding Bikes",
    "Competitive Programming",
    "DIY Projects"
  ];

  achievements = [
    `Microsoft certified in Programming in C# (Exam: 70-483).`,
    `Appreciated for providing PoC for AI powered smart shopping cart.`,
    `Developed Smart Data Dictionary and Field Extractor and Payment File Generator as a part of
    automation in Infosys.`,
    `Created Dynamic entity search app which generates search form dynamically for a given entity.`
  ]

  constructor(private httpService: AppHttpService) { }

  printResume() {
    window.print();
  }

  get address(): string {
    return this.addressLine1 +  (this.addressLine1 && this.addressLine2 ? ", " : "") + this.addressLine2;
  }

  get isPercentSkills(): boolean {
    return this.skills.some(s => s.percent);
  }

  getCourseDuration(course: IEducation): string {
    return `${course.startYear}-${course.endYear.substr(2, 2)}`;
  }

  getCompanyAddress(experience: IExperience) {
    return `${experience.companyAddress?.city}, ${experience.companyAddress?.country}`;
  }

  getExperienceDuration(experience: IExperience) {
    const begin = `${this.monthNames[experience.beginDate?.getMonth()]}, ${experience.beginDate?.getFullYear()}`;
    const end = experience.isCurrent ? "Present" : `${this.monthNames[experience.endDate?.getMonth()]}, ${experience.endDate?.getFullYear()}`;
    return `${begin} - ${end}`;
  }

  get isMyResume(): boolean {
    return this.firstName === "Mohd Anas" && this.lastName === "Khan" && this.phoneNumber.indexOf("9598979221") > -1;
  }
}
