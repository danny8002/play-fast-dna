import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Pivot, Typography, TypographySize, TypographyTag } from "@microsoft/fast-components-react-msft";
import { TabsItem } from '@microsoft/fast-components-react-base';

export class App extends Component {

  public render(): JSX.Element {

    const t1: TabsItem = {
      id: "tab-1",
      tab: (): React.ReactNode => {
        return <Typography size={TypographySize._8} tag={TypographyTag.span}>tab-1</Typography>;
      },
      content: (): React.ReactNode => { return (<div>tab-1 content</div>); }
    };

    const t2: TabsItem = {
      id: "tab-2",
      tab: (): React.ReactNode => {
        return <Typography size={TypographySize._8} tag={TypographyTag.span}>tab-2</Typography>;
      },
      content: (): React.ReactNode => { return (<div>tab-2 content</div>); }
    };

    const t3: TabsItem = {
      id: "tab-3",
      tab: (): React.ReactNode => {
        return <Typography size={TypographySize._8} tag={TypographyTag.span}>tab-3</Typography>;
      },
      content: (): React.ReactNode => { return (<div>tab-3 content</div>); }
    };

    return <Pivot activeId={"tab-1"} label={"actions"} items={[t1, t2, t3]} />;

  }

}