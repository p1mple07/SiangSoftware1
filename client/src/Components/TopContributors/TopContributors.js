import "./TopContributors.css"


const TopContributors = () => {
    return (<div class="roundbox sidebox top-contributed borderTopRound " >
        <div class="caption titled">→ Top rated
            <div class="top-links">
            </div>
        </div>
        <table class="rtable ">
            <tbody>
                <tr>
                    <th class="left" >#</th>
                    <th class="">User</th>
                    <th class="" >Rating</th>
                </tr>
                <tr>
                    <td class="left dark">1</td>
                    <td class=" dark"><a href="/profile/jiangly" title="Legendary Grandmaster jiangly" class="rated-user user-legendary"><span class="legendary-user-first-letter">j</span>iangly</a></td>
                    <td class=" dark">3744</td>
                </tr>
                <tr>
                    <td class="left ">2</td>
                    <td class=""><a href="/profile/maroonrk" title="Legendary Grandmaster maroonrk" class="rated-user user-legendary"><span class="legendary-user-first-letter">m</span>aroonrk</a></td>
                    <td class="">3605</td>
                </tr>
                <tr>
                    <td class="left dark">3</td>
                    <td class=" dark"><a href="/profile/Benq" title="Legendary Grandmaster Benq" class="rated-user user-legendary"><span class="legendary-user-first-letter">B</span>enq</a></td>
                    <td class=" dark">3572</td>
                </tr>
                <tr>
                    <td class="left ">4</td>
                    <td class=""><a href="/profile/ecnerwala" title="Legendary Grandmaster ecnerwala" class="rated-user user-legendary"><span class="legendary-user-first-letter">e</span>cnerwala</a></td>
                    <td class="">3542</td>
                </tr>
                <tr>
                    <td class="left dark">5</td>
                    <td class=" dark"><a href="/profile/orzdevinwang" title="Legendary Grandmaster orzdevinwang" class="rated-user user-legendary"><span class="legendary-user-first-letter">o</span>rzdevinwang</a></td>
                    <td class=" dark">3493</td>
                </tr>
                <tr>
                    <td class="left ">6</td>
                    <td class=""><a href="/profile/inaFSTream" title="Legendary Grandmaster inaFSTream" class="rated-user user-legendary"><span class="legendary-user-first-letter">i</span>naFSTream</a></td>
                    <td class="">3478</td>
                </tr>
                <tr>
                    <td class="left dark">7</td>
                    <td class=" dark"><a href="/profile/Um_nik" title="Legendary Grandmaster Um_nik" class="rated-user user-legendary"><span class="legendary-user-first-letter">U</span>m_nik</a></td>
                    <td class=" dark">3430</td>
                </tr>
                <tr>
                    <td class="left ">8</td>
                    <td class=""><a href="/profile/Rebelz" title="Legendary Grandmaster Rebelz" class="rated-user user-legendary"><span class="legendary-user-first-letter">R</span>ebelz</a></td>
                    <td class="">3409</td>
                </tr>
                <tr>
                    <td class="left dark">9</td>
                    <td class=" dark"><a href="/profile/gamegame" title="Legendary Grandmaster gamegame" class="rated-user user-legendary"><span class="legendary-user-first-letter">g</span>amegame</a></td>
                    <td class=" dark">3402</td>
                </tr>
                <tr>
                    <td class="left bottom">10</td>
                    <td class="bottom"><a href="/profile/ksun48" title="Legendary Grandmaster ksun48" class="rated-user user-legendary"><span class="legendary-user-first-letter">k</span>sun48</a></td>
                    <td class="bottom">3400</td>
                </tr>
            </tbody>
        </table>
        <div class="bottom-links">
            <table >
                <tbody>
                    <tr>
                        <td >
                            <a href="/ratings/countries">Countries</a> |
                            <a href="/ratings/cities">Cities</a> |
                            <a href="/ratings/organizations">Organizations</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>);
}

export default TopContributors;