// 

import React from "react";

const Nav = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="nav flex">
                    <div className="nav-left flex">
                        <div>
                            <a href="#">ホーム</a>
                        </div>
                        <div>
                            <a href="#">オススメ</a>
                        </div>
                        <div>
                            <a href="#">フォロー中</a>
                        </div>
                        <div>
                            <a href="#">ニュースショーケース</a>
                        </div>
                    </div>
                    <p>|</p>
                    <div className="nav-right flex">
                        <div>
                            <a href="#">日本</a>
                        </div>
                        <div>
                            <a href="#">世界</a>
                        </div>
                        <div>
                            <a href="#">ローカル</a>
                        </div>
                        <div>
                            <a href="#">ビジネス</a>
                        </div>
                        <div>
                            <a href="#">科学＆テクノロジー</a>
                        </div>
                        <div>
                            <a href="#">エンタメ</a>
                        </div>
                        <div>
                            <a href="#">スポーツ</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Nav;