import { html } from 'lit-element/lit-element.js';
import OutcomeTreeNode from './outcome-tree-node.js';

class UnlinkOutcomeNode extends OutcomeTreeNode {

	static get properties() {
		return Object.assign({},
			OutcomeTreeNode.properties, {
				_stateNode: { type: Object },
				_dataState: { type: Object }
			}
		);
	}

	constructor() {
		super();
		this._expanded = true;
	}

	update(changedProperties) {
		super.update(changedProperties);
		this._stateNode.elementRef = this;
	}

	connectedCallback() {
		this._stateNode.elementRef = this;
		this.checkboxState = this._stateNode.checkboxState;
		super.connectedCallback();
	}

	renderChildren() {
		return this._stateNode.children.map(node => html`
			<unlink-outcomes-picker-node
				tabindex="-1"
				.htmlId="node_${node.outcomeId}"
				.checkboxState="${node.checkboxState}"
				._stateNode="${node}"
				._dataState="${this._dataState}"
				._depth="${this._depth + 1}"
			></unlink-outcomes-picker-node>
		`);
	}

	getSelectionNode() {
		return this._stateNode;
	}

	getRoots() {
		return this._dataState.stateNodes.map(pn => pn.elementRef);
	}

	getOutcome() {
		return this._dataState.outcomesMap.get(this._stateNode.outcomeId);
	}

}

customElements.define('unlink-outcomes-picker-node', UnlinkOutcomeNode);
