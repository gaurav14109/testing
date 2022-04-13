import { Company } from './Company';
import {User} from './User'
import { CustomMap } from './customMap';

const map = new CustomMap();
const user = new User();
const company = new Company();
map.addMarker(user)
map.addMarker(company)