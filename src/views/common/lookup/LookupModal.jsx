import React from "react";

class Lookup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        };
    }

    collapse = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            this.setState({ opened: false });
        }
    };

    expand = () => {
        this.setState((state) => ({ opened: !state.opened }));
    };

    renderContent = () => {
        return (
            <div tabIndex={1} className={this.props.className}>
                {this.props.children}
            </div>
        );
    };

    collapseOnChild = () => {
        this.setState({ opened: false });
    };

    render() {
        return (
            <div tabIndex={0} onBlur={this.collapse}>
                <div onClick={this.expand}>{this.props.onClickElement}</div>
                <div onClick={this.collapseOnChild}>{this.state.opened && this.renderContent()}</div>
            </div>
        );
    }
}

export default Lookup;
