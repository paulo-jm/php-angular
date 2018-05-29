import { Entity } from '../mapping/entity';
import { GenericDataSourceModule } from '../collection/generic-data-source.module';
import { GenericDao } from '../dao/generic-dao';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms/src/model';

export abstract class GenericCrudComponent<T extends Entity> {

    abstract getDao(): GenericDao<T>;

}
