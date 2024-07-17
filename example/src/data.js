import imageqw from './icmycv.jpg'

export const CVData = {
  personalData: {
    name: 'Daniil Chumachenko',
    title: 'Android Middle Engineer',
    image: imageqw,
    contacts: [
      {type: 'email', value: 'chumachdk@gmail.com'},
      {type: 'phone', value: '+380660838925'},
      {type: 'location', value: 'Odesa, Ukraine'},
      {type: 'telegram', value: 'https://t.me/chvma'},
      {type: 'linkedin', value: 'https://surl.li/ixwjz'},
      {type: 'github', value: 'https://github.com/DaniilChumachenko'}
    ]
  },
  sections: [
    {
      type: 'text',
      title: 'About me',
      content: '\n' +
        'Hello, my name is Daniil Chumachenko and I am a middle Android engineer. I have been interested in mobile applications and computers since childhood, I have always been curious about how it all works. Based on that, I specifically applied to a technical university for a corresponding major and later started working in the field of Android programming. Currently, I am actively developing in this sphere and trying to keep up with all the latest trends in this industry.',
      icon: 'usertie'
    },
    {
      type: 'common-list',
      title: 'Education',
      icon: 'graduation',
      items: [
        {
          title: 'Computer Software Engineering, Bachelor',
          authority: 'Odessa National Polytechnic University',
          authorityWebSite: 'https://drive.google.com/file/d/14f7vNglpGis5vdoG3gtfTuM0q58YJ2gs/view?usp=drive_link',
          rightSide: '2017 - 2021'
        },
        {
          title: 'Computer Software Engineering, Master',
          authority: 'Odessa National Polytechnic University',
          authorityWebSite: 'https://drive.google.com/file/d/1sOJz65Qm75qzyl2qbBFcrXdewB9ldYXf/view?usp=drive_link',
          rightSide: '2021 - 2022'
        },
        {
          title: 'Computer Software Engineering, PHD',
          authority: 'Odessa National Polytechnic University',
          authorityWebSite: '',
          rightSide: '2023 - Present'
        }
      ]
    },
    {
      type: 'experiences-list',
      title: 'Experiences',
      description: '',
      icon: 'archive',
      items: [
        {
          title: 'Middle Android Engineer',
          company: 'Finegry.md',
          description: 'All work with Android components is done within the paradigm of Android Compose. As a senior engineer at the company, I make architectural decisions and solve all complex problems, from publishing the application, fixing bugs, and developing features to configuration aspects with Firebase and CI. Over time, the project has expanded from an application for a single bank to a white-label application supporting multiple banks, using multi-modularity, DI, and product flavors. Additionally, for such a complex configuration of multiple build sources, I created a CI script so that a tester could build an APK for any implementation of the application at any time.',
          companyWebSite: '',
          companyMeta: 'Product company',
          datesBetween: '2023.10 - present',
          descriptionTags: ['Jatpack', 'Java', 'Kotlin', 'Android Compose', 'Navigation', 'CI/CD', 'Product flavors', 'Dagger Hilt', 'Retrofit 2', 'Themes', 'Firebase', 'Coroutines', 'Realm', 'Shared Preferences', 'Animations', 'Cloud messaging', 'Remote config']
        },
        {
          title: 'Middle Android Engineer',
          company: 'Avirise',
          description: 'On this project, I was involved in creating new functionality, providing consultations on architectural development aspects, fixing bugs, and supporting both old and new features. I also actively worked on app monetization, specifically with the placement and implementation of advertising through Google Ads.',
          companyWebSite: '',
          companyMeta: 'Product company',
          datesBetween: '2022.10 - 2023.10',
          descriptionTags: ['Jatpack', 'Java', 'Kotlin', 'Widgets', 'Navigation', 'Permissions', 'Remote config', 'Koin', 'Retrofit 2', 'Themes', 'Firebase', 'Custom View', 'Coroutines', 'Compose', 'Room', 'Shared Preferences', 'Google ADS', 'Google Billing & Admob', 'In-App Purchases']
        },
        {
          title: 'Strong Junior Android Engineer',
          company: 'MashApp',
          description: 'In this project, I significantly expanded my skills and performed various tasks, such as refactoring, bug fixing, porting and developing functionality, creating separate modules, creating custom views, calculating the positions of elements using mathematics, optimization, animations and etc.',
          companyWebSite: '',
          companyMeta: 'Product company',
          datesBetween: '2021.08 - 2022.09',
          descriptionTags: ['Jatpack', 'Java', 'Kotlin', 'Koin', 'Retrofit 2', 'Flexbox', 'Google map', 'Mixpanel', 'Firebase', 'ViewPager 2', 'Branch IO', 'Amazon IVS', 'WebView', 'Custom view', 'Coroutines', 'ExoPlayer', 'BottomSheetBehavior', 'Room', 'Shared Preferences']
        },
        {
          title: 'Junior Android Engineer',
          company: 'StarApps',
          description: 'At this workplace, I started by fixing critical errors in the project related to displaying technical indicators of the smartphone (temperature, battery level, etc.). After that, I was transferred to another project where I developed various screens and functions for an application that uses cards as the main form of communication. I also fixed bugs and rewrote old Java code to Kotlin.',
          companyWebSite: '',
          companyMeta: 'Outsource company',
          descriptionTags: ['Java', 'Kotlin', 'Dagger Hilt', 'MVVM', 'MPAndroidChart', 'MVP', 'Dagger 2', 'Retrofit 2', 'Tooltip', 'Flexbox', 'MapBox', 'Realm', 'Mixpanel'],
          datesBetween: '2020.12 - 2021.09'
        },
        {
          title: 'Intern Android Engineer',
          company: 'dSTAR LAB Ltd',
          companyWebSite: '',
          description: 'During my internship, I developed the notes feature as a separate module called "Notes". It was my first job, and at that time, I only knew Java. So, during my time at this company, I studied Android development tools, popular architectural patterns, and made the transition from Java to Kotlin.',
          companyMeta: 'Product company',
          descriptionTags: ['Java', 'Kotlin', 'Room', 'MVVM', 'Jetpack', 'Clean Architecture', 'Android SDK', 'Dagger 2', 'AOSP', 'С++'],
          datesBetween: '2019.12 - 2020.06'
        }
      ]
    },
    {
      type: 'projects-list',
      title: 'Projects',
      description: 'A couple of projects I\'ve been involved in',
      icon: 'tasks',
      groups: [
        {
          sectionHeader: 'Avirise',
          description: '',
          items: [
            {
              title: 'Weather Forecast',
              projectUrl: 'https://play.google.com/store/apps/details?id=com.weather.forecast.widget.hourly.local.daily.temperature.today.accurate.forecaster.detailed.precipitaion',
              description: ''
            },
            {
              title: 'Translator',
              projectUrl: 'https://play.google.com/store/apps/details?id=com.all.language.translator.free.speak.translate.app',
              description: ''
            },
            {
              title: 'PDF Reader: converter files',
              projectUrl: 'https://play.google.com/store/apps/details?id=com.avirise.pdf.viewer.pdfreader.reader',
              description: ''
            }
          ]
        },
        {
          sectionHeader: 'MashApp',
          description: '',
          items: [
            {
              title: 'Stritch: Next-Gen Video Format',
              projectUrl: 'https://play.google.com/store/apps/details?id=com.slothlive.app',
              description: ''
            },
            {
              title: 'Upeople: Album of Hope',
              projectUrl: 'https://play.google.com/store/apps/details?id=com.upeople.app',
              description: ''
            },
            {
              title: 'StayPlus: Book hotels easily',
              projectUrl: 'https://play.google.com/store/apps/details?id=me.staystories.app',
              description: ''
            }
          ]
        },
        {
          sectionHeader: 'StarApps',
          description: '',
          items: [
            {
              title: 'Steps',
              projectUrl: '',
              description: 'This project used maps as the primary means of communication. Currently closed.'
            },
            {
              title: 'Android Security',
              projectUrl: '',
              description: 'An internal project of the company designed to monitor device load.'
            }
          ]
        },
        {
          sectionHeader: 'dSTAR LAB Ltd',
          description: '',
          items: [
            {
              title: 'dStar',
              projectUrl: '',
              description: 'A messenger based on Signal with improved routing and additional features. Currently closed.'
            }
          ]
        }
      ]
    },
    {
      type: 'common-list',
      title: 'Conferences & Certificates',
      description: '',
      icon: 'comments',
      items: [
        {
          title: 'Google I/O / 2023',
          authority: '',
          authorityMeta: 'Conference',
          authorityWebSite: '',
          rightSide: ''
        },
        {
          title: 'CIG R&D LAB / 2020',
          authority: '',
          authorityMeta: 'Certificate',
          authorityWebSite: '',
          rightSide: ''
        },
        {
          title: 'Hillel (IT School) / 2019',
          authorityMeta: 'Certificate'
        }
      ]
    },
    {
      type: 'common-list',
      title: 'Languages',
      icon: 'language',
      items: [
        {
          title: 'English',
          authorityMeta: 'Intermediate'
        },
        {
          title: 'Ukrainian',
          authorityMeta: 'Native'
        },
        {
          title: 'Russian',
          authorityMeta: 'Native'
        },
        {
          title: 'Spanish',
          authorityMeta: 'Beginner'
        }
      ]
    },
    {
      type: 'tag-list',
      title: 'Technology stack',
      icon: 'rocket',
      items: ['Java', 'Kotlin', 'MVVM', 'MVP', 'Gradle', 'Git', 'Jira', 'Slack', 'Bitbucket', 'GitHub', 'Figma', 'Zeplin', 'Bitrise', 'Dagger 2', 'Dagger Hilt', 'AOSP', 'С++', 'Koin', 'Clean Architecture', 'Android SDK', 'Retrofit 2', 'Tooltip', 'Flexbox', 'MapBox', 'Google maps', 'Mixpanel', 'Firebase', 'MPAndroidChart', 'ViewPager 2', 'Branch IO', 'Amazon IVS', 'Custom view', 'Coroutines', 'RxJava', 'ExoPlayer', 'BottomSheetBehavior', 'WebView', 'Room', 'SOLID', 'Realm', 'Shared Preference', 'Google ADS', 'Permissions', 'Google Billing & Admob', 'Remote Config', 'In-App Purchases']
    },
    {
      type: 'tag-list',
      title: 'Hobbies & Interests',
      icon: 'cubes',
      items: ['Guitar', 'Basket-Ball', 'Jog', 'Games', 'Crypto', 'Traffic Arbitrage', 'Movies']
    }
  ]
}
