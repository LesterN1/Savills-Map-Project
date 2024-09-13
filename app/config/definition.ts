export type BuildLink = {
    name: string;
    link: string;
}

export type BuildGroup = {
    name: string;
    links: BuildLink[];
}

export interface Props {
    children?: React.ReactNode;
    styles?: string;
}

export const buildgroups:BuildGroup[] =[
    {
      "name": "Savills",
      "links": [
        {
          'name': '浪澄灣1套',
          'link': '#'
        },
        {
          'name': '威靈頓街10號',
          'link': '#'
        },
        {
          'name': '太古城中心第一期',
          'link': '#'
        },
        {
          'name': '力寶中心',
          'link': '#'
        }
      ]
    },
    {
      'name': 'Guardian',
      'links': [
        {
          'name': '豐樂閣',
          'link': '#'
        },
        {
          'name': '紫翠花園',
          'link': '#'
        },
        {
          'name': '海峰華軒',
          'link': '#'
        },
        {
          'name': '灣景台',
          'link': '#'
        }
      ]
    },
    {
      'name': 'Hang Seng',
      'links':[
        {
          'name': '恆生青山道大廈',
          'link': '#'
        },
        {
          'name': '恆生銅鑼灣大廈',
          'link': '#'
        },
        {
          'name': '恆生九龍城大廈',
          'link': '#'
        },
        {
          'name': '恆生旺角大廈',
          'link': '#'
        }
      ]
    },
    {
      'name': 'Patrol Vehicles',
      'links':[
        {
          'name': 'ID:vehicle1',
          'link': '#'
        },
        {
          'name': 'ID:vehicle2',
          'link': '#'
        },
        {
          'name': 'ID:vehicle3',
          'link': '#'
        },
        {
          'name': 'ID:vehicle4',
          'link': '#'
        }
      ]
    }
  ]