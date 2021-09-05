import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { traverse } from '@vitagroup/common';
import { AppDocWithContent } from '../interfaces/app-doc.interface';
import { AppDocService } from '../services/app-doc.service';

@Injectable()
export class AppDocResolve implements Resolve<AppDocWithContent> {
  constructor(protected docs: AppDocService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<AppDocWithContent> {
    const slug =
      route.params.slug ||
      traverse(
        route,
        (r) => r.parent,
        (r) => r.params?.slug
      )?.params.slug;

    return this.docs.resolve(slug);
  }
}
