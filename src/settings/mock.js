import { ReactComponent as PaidIcon } from '../assets/paid.svg';
import { ReactComponent as DecUser} from '../assets/dec.svg';
import { ReactComponent as NovUser} from '../assets/nov.svg';
import { ReactComponent as OctUser} from '../assets/oct.svg';
import { ReactComponent as SepUser} from '../assets/sep.svg';
import { ReactComponent as JunUser} from '../assets/jun.svg';
import { ReactComponent as AugUser} from '../assets/aug.svg';
import { ReactComponent as JulUser} from '../assets/jul.svg';

export const settingItem = [
  {
    name: 'My details'
  },
  {
    name: 'Profile'
  },
  {
    name: 'Password'
  },
  {
    name: 'Team'
  },
  {
    name: 'Plan'
  },
  {
    name: 'Billing'
  },
  {
    name: 'Notifications'
  },
  {
    name: 'Integerations'
  },
  {
    name: 'API'
  },
]

export const tableData = [
  {
    invoice: 'Basic Plan – Dec 2022',
    amount: 'USD $10.00',
    date: 'Dec 1, 2022',
    status: <PaidIcon />,
    users: <DecUser />
  },
  {
    invoice: 'Basic Plan – Nov 2022',
    amount: 'USD $10.00',
    date: 'Nov 1, 2022',
    status: <PaidIcon />,
    users: <NovUser />
  },
  {
    invoice: 'Basic Plan – Oct 2022',
    amount: 'USD $10.00',
    date: 'Oct 1, 2022',
    status: <PaidIcon />,
    users: <OctUser />
  },
  {
    invoice: 'Basic Plan – Sep 2022',
    amount: 'USD $10.00',
    date: 'Sep 1, 2022',
    status: <PaidIcon />,
    users: <SepUser />
  },
  {
    invoice: 'Basic Plan – Aug 2022',
    amount: 'USD $10.00',
    date: 'Aug 1, 2022',
    status: <PaidIcon />,
    users: <AugUser />
  },
  {
    invoice: 'Basic Plan – Jul 2022',
    amount: 'USD $10.00',
    date: 'Jul 1, 2022',
    status: <PaidIcon />,
    users: <JulUser />
  },
  {
    invoice: 'Basic Plan – Jun 2022',
    amount: 'USD $10.00',
    date: 'Jun 1, 2022',
    status: <PaidIcon />,
    users: <JunUser />
  },
]