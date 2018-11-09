/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {CdkTreeNodePadding} from '@angular/cdk/tree';
import {Directive, Input} from '@angular/core';

/**
 * Wrapper for the CdkTree padding with Material design styles.
 */
@Directive({
  selector: '[matTreeNodePadding]',
  providers: [{provide: CdkTreeNodePadding, useExisting: MatTreeNodePadding}]
})
export class MatTreeNodePadding<T> extends CdkTreeNodePadding<T> {

  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
  @Input('matTreeNodePadding') level: number;

  /** The indent for each level. Default number 40px from material design menu sub-menu spec. */
  @Input('matTreeNodePaddingIndent') indent: number;
}

// TODO(devversion): workaround for https://github.com/angular/material2/issues/12760
(MatTreeNodePadding as any)['ctorParameters'] = () =>
    (CdkTreeNodePadding as any)['ctorParameters'];
