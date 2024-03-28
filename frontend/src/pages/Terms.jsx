import { useEffect } from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Notification from '../components/notification/Notification';
import { theme } from "../components/Theme";

const tm = {
  p: '1rem 2rem',
  heading: {
    color: theme.palette.primary.dark,
    fontSize: '3rem',
    fontFamily: 'Lato',
    fontWeight: '700',
    fontStyle: 'italic',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem'
    }
  },
  follow: {
    fontStyle: 'italic',
  },
  subhead: {
    fontWeight: '500',
    fontStyle: 'italic',
    fontSize: '2rem',
    fontFamily: 'Lato',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]:{
      fontSize: '1.5rem'
    }
  },
  body: {
    fontStyle: 'italic',
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:visited, &:linked': {
        color: theme.palette.primary.main,
      }
    }
  }
}

const Terms = () => {
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  },[])

  const loginReducer = useSelector((state) => state.loginReducer);
  const { acilDetails } = loginReducer;
  return (
    <Box sx={{minHeight: '85vh'}}>
      <Grid container direction='column' sx={tm}>
        <Grid item sx={tm.logos} container justifyContent='space-between' alignItems='center'>
          <Box component={Link} to='/'>
            <ArrowBackIcon sx={{color: '#000000'}}/>
          </Box>
          {
            acilDetails && acilDetails && <Notification/>
          }
        </Grid>
        <Typography variant='h1' sx={tm.heading} align='center'>Below are our Terms of Use</Typography>
        <Typography sx={tm.follow} align='center'>
          We are glad that just like us, you also take terms of use seriously.
        </Typography><br/>
        <Typography sx={tm.subhead}>Welcome</Typography>
        <Typography sx={tm.body}>
          ACIL welcomes Global visitors to the ACIL website located at {' '}
          <a href="www.agrocil.com">www.agrocil.com</a> (the "Website"). ACIL is collectively referred to as
          ("ACIL", "we", "us", "our"). Please read the following Website terms of use
          ("Terms of Use") before using the Website. By accessing and using the
          Website, you agree to be bound by all the Terms of Use set forth herein. If
          you do not agree with these Terms of Use, your sole recourse is to leave the
          Website immediately. A copy of these Terms of Use may be downloaded, saved
          and printed for your reference.
        </Typography><br/>
        <Typography sx={tm.subhead}>Ownership/Restrictions of Use</Typography>
        <Typography sx={tm.body}>
          The Website is owned and operated by ACIL. All content, data, graphics,
          photographs, images, audio, video, software, systems, processes, trademarks,
          service marks, trade names and other information including, without
          limitation, the "look and feel" of the Website (collectively, the "Content")
          contained in this Website are proprietary to ACIL, its affiliates and/or
          third-party licensors. The Content is protected by International copyright
          and trademark laws.
          Except as set forth herein, you may not modify, copy, reproduce, publish,
          post, transmit, distribute, display, perform, create derivative works from,
          transfer or sell any Content without the express prior written consent of
          ACIL. You may download, print and reproduce the Content for your own
          non-commercial, informational purposes provided you agree to maintain all
          copyright or other proprietary notices contained in such Content, and to
          cite the URL Source of such Content. Reproduction of multiple copies of the
          Content, in whole or in part, for resale or distribution is strictly
          prohibited except with the prior written permission of ACIL. To obtain
          written consent for such reproduction, please contact us at {' '}
          <a href="mailto:info@agrocil.com" target="_blank" rel="noopener noreferrer">
            info@agrocil.com.
          </a>
        </Typography><br/>
        <Typography sx={tm.subhead}>
          No-Guarantee on your Investment or your Return on Investment (ROI)
        </Typography>
        <Typography sx={tm.body}>
          Please note that as with any investment, especially agriculture focused
          prospect, the returns of your Investment and your estimated profit on Grow
          For Me after investing is not one hundred percent (100%) guaranteed. Please
          take note of the general risks of losing your investment associated with
          your decision on your investment below:
        </Typography><br/>
        <Typography sx={tm.subhead}>General Risks</Typography>
        <Typography sx={tm.body}>
          Loss of investment may stem from general Agricultural risks as well as
          business-related risks. General risks can include (but are not limited to)
          climate risks, political risks, legislative risk, trade risk, political and
          economic risk. Business risks include: risks arising from fluctuations in
          market demand for the crops/commodities/products or services offered by the
          Broker; industry risk (meaning, risks inherent to the business area in which
          the company operates); competition risk (including, for example, the risk that
          a competitor is not only in the same area but better able to service customers
          or suppliers in that area); growth risk (for example, that the company grows
          too quickly versus business demand for its products or services, or that it is
          unable to grow to a level required in order to be successful) ; employee risk
          (for example, that key employees required for the business cannot be recruited
          or retained); fraud risk; and revenue risk (such risks vary from company to
          company, but include risks that may prevent revenue being realized such as the
          costs of new product launches or research and development costs, which cannot
          always be accurately budgeted).
        </Typography><br/>
        <Typography sx={tm.subhead}>Loss of investment</Typography>
        <Typography sx={tm.body}>
          The biggest financial risk to a investor is losing the entire investment.
          investments available through the Platform include commodity financing for
          purchasing and trading, crops production financing or crops without a
          proven track record (or any track record at all). The risk of crop failure
          or failed commodity trades are high. Most of the cultivated farms for each
          season are at the risk of failing due to but not limited to multiple
          factors during the farming cycle of your investment. While commodity
          purchases for trading is at the risk of failing due to but not limited to
          damage, failed quality and quantity standards or accidents during
          transportation in such cases, it is highly likely that you may lose your
          principal investment completely if those factors are not covered by crop
          insurance. Even if crops do become profitable, it is not guaranteed that
          your initial investment will be returned or you will receive a return on
          your investment as such returns are highly variable. You should be aware
          that any returns you could potentially receive might not cover your initial
          investment and MAY also be inconsistent in amount and frequency Please read
          more about associated risks in our risk policy document
          <a href="https://growforme.com/en/riskpolicy/" target="_blank" rel="noopener noreferrer">
            Risk Policy
          </a>
        </Typography><br/>
        <Typography sx={tm.subhead}>Registration/Passwords</Typography>
        <Typography sx={tm.body}>
          To access certain portions of the Website and/or to request sample products
          online, you may be asked to complete an online registration form. In
          consideration for your use of this Website and the services provided on it,
          you agree to provide true, current, complete and accurate information as
          requested on any registration form to which this Website may direct you,
          and update that registration information as soon as possible after any
          information on such registration form changes.
          Upon registration, you will choose a username and password. You alone are
          responsible for keeping that password and username confidential, and for
          all activity that occurs on this Website under such a password or username.
          You agree to immediately notify ACIL of any unauthorized use of your
          password or username or any other breach of security.
        </Typography><br/>
        <Typography sx={tm.subhead}>Linking</Typography>
        <Typography sx={tm.body}>
          It is our goal to provide increased value to you, our visitors. Therefore,
          the Website might offer you links to other sites on the Internet that are
          owned and operated by third parties and therefore not affiliated with us.
          Please understand that such linked websites are independent of ACIL and
          that ACIL has no control over the content of such websites. Consequently,
          ACIL cannot be held liable and makes no warranty or representation
          whatsoever as to the accuracy, timeliness and/or completeness of the
          information contained on such websites.
          The links which we might place on our Website do not imply that we investor,
          endorse or are affiliated or associated with, or have been legally authorized
          to use any trade-mark, trade name, service mark, design, logo, symbol or
          other copyrighted materials displayed on or accessible through such sites.
        </Typography><br/>
        <Typography sx={tm.subhead}>User Conduct</Typography>
        <Box sx={tm.body}>
          As a condition of your continued access to and use of this Website, you
          agree to abide by all applicable federal, provincial, state, region,
          territorial and other laws and regulations and the "Code of Conduct" set
          forth below. Specifically, in addition, without limiting the foregoing, you
          agree not to:
          <ol>
            <li>
              Upload, post, e-mail or otherwise transmit any material that:
              <ol>
                <li>
                  Constitutes unsolicited or unauthorized advertising, promotional materials,
                  "junk mail," "spam," "chain letters," "pyramid schemes," or any other form of
                  solicitation;
                </li>
                <li>
                  Infringes any patent, trademark, trade secret, copyright or
                  other proprietary or privacy rights of any party;
                </li>
                <li>
                  Is unlawful, harmful, threatening, abusive, harassing,
                  tortious, defamatory, vulgar, obscene, libellous, invasive of
                  another's privacy, hateful, racially, ethnically or otherwise
                  objectionable, or an unfair product comparison; or
                </li>
                <li>
                  Contains any form of destructive software such as a virus,
                  worm, Trojan horse, time bomb, cancelbot, or any other harmful
                  components or any other computer file, program or code, designed to
                  interrupt, destroy or limit the functionality of any computer
                  software, hardware or telecommunications equipment;
                </li>
                <li>
                  Harvest or otherwise collect or store any information (
                  including personally identifiable information) about other users of
                  the Website, including e-mail addresses, without the express consent
                  of such users;
                </li>
                <li>
                  To mislead others, create a false identity of the sender or the
                  origin of a message, forge headers or otherwise manipulate
                  identifiers to disguise the origin of any material transmitted
                  through the Website;
                </li>
                <li>
                  Attempt to gain unauthorized access to the Website, other computer systems or networks connected to the Website, through password mining or any other means;
                </li>
                <li>
                  Interfere with or disrupt networks or servers connected to the Website or violate the regulations, policies or procedures of such networks; and
                </li>
                <li>
                  Use, download or otherwise copy, or provide to any person or entity any Website users directory or other user or usage information or any portion thereof other than in the context of your use of the Website.
                </li>
              </ol>
            </li>
            <li>
              Harvest or otherwise collect or store any information (including personally identifiable information) about other users of the Website, including e-mail addresses, without the express consent of such users;
            </li>
            <li>
              To mislead others, create a false identity of the sender or the origin of a message, forge headers or otherwise manipulate identifiers to disguise the origin of any material transmitted through the Website;
            </li>
            <li>
              Attempt to gain unauthorized access to the Website, other computer systems or networks connected to the Website, through password mining or any other means;
            </li>
            <li>
              Interfere with or disrupt networks or servers connected to the Website or violate the regulations, policies or procedures of such networks; and
            </li>
            <li>
              Use, download or otherwise copy, or provide to any person or entity any Website users directory or other user or usage information or any portion thereof other than in the context of your use of the Website.
            </li>
          </ol>
        </Box><br/>
        <Typography sx={tm.subhead}>
          Disclaimer / Limitation of Liability
        </Typography>
        <Typography sx={tm.body}>
          THE LAWS OF CERTAIN JURISDICTIONS, INCLUDING NIGERIA, DO NOT ALLOW THE
          EXCLUSION OR LIMITATION OF LEGAL WARRANTIES, LIABILITY OR CERTAIN DAMAGES
          OR LIMITATIONS OF REPRESENTATIONS MADE CONCERNING GOODS OR SERVICES.
          IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE BELOW EXCLUSIONS OR
          LIMITATIONS MAY NOT APPLY TO YOU.  
          Although we strive to update and keep accurate as much as possible the Content
          contained on the Website, errors and/or omissions may occur. <br/>
          ACCORDINGLY, THIS WEBSITE, INCLUDING THE CONTENT AND SERVICES PROVIDED
          HEREIN, IS BEING PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS AND
          WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. ACIL DISCLAIMS
          ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED
          WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, AND NON-INFRINGEMENT. ACIL DOES NOT WARRANT THAT THE FUNCTIONS ON
          THE WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE OR FREE OF VIRUSES OR OTHER
          HARMFUL COMPONENTS.
          IN NO EVENT SHALL ACIL BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
          SPECIAL, OR CONSEQUENTIAL DAMAGES THAT RESULT FROM OR IN CONNECTION WITH
          THE USE OF, OR THE INABILITY TO USE, THE WEBSITE OR ANY CONTENT, SERVICES
          OR ANY PRODUCT SAMPLE OBTAINED THROUGH THE WEBSITE, EVEN IF ACIL HAS BEEN
          ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          <br />
          <strong>
            SAMPLE PRODUCTS DISPLAYED ON THE WEBSITE MAY NOT BE AVAILABLE AT ALL
            TIMES AND PRODUCTS MAY BE CHANGED, AND PRODUCTS SUBSTITUTED OR
            DISCONTINUED AT ANY TIME. WHILE WE ATTEMPT TO PROVIDE AN ACCURATE
            DESCRIPTION OF ITEMS AVAILABLE ON THE SITE, WE DO NOT WARRANT THE
            ACCURACY, COMPLETENESS, RELIABILITY OR CURRENCY OF SUCH DESCRIPTIONS.
          </strong> <br/><br/>
          ALL OTHER TERMS AND CONDITIONS GOVERNING ANY PRODUCT ON THE WEBSITE ARE
          PROVIDED WHEN YOU REQUEST A PRODUCT. ACIL MAKES NO WARRANTIES REGARDING
          ANY PRODUCT SAMPLES. YOU EXPRESSLY RELEASE AND HOLD ACIL HARMLESS FROM ANY
          AND ALL CLAIMS, LOSSES, LIABILITY, DAMAGES, INJURIES AND EXPENSES
          (INCLUDING, WITHOUT LIMITATION, PERSONAL INJURY CLAIMS) ARISING OUT OF OR
          RELATING TO YOUR USE OF ANY PRODUCT SAMPLES OBTAINED VIA THE WEBSITE. YOUR
          SOLE RECOURSE SHALL BE AGAINST THE PRODUCT MANUFACTURERS.<br/>
        </Typography><br/>
        <Typography sx={tm.subhead}>Indemnity</Typography>
        <Typography sx={tm.body}>
          You agree to indemnify and hold harmless ACIL, its affiliates, members,
          officers, employees, agents, and licensors from and against all losses,
          expenses, damages, claims, fines, penalties, costs and liabilities
          (including reasonable legal and accounting fees), resulting from your
          (or anyone acting under your password or username) use of this Website,
          connection thereto, or any alleged violation by you of these Terms of Use,
          including, without limitation, the Code of Conduct.
          In particular, you agree to indemnify and hold harmless ACIL,
          its affiliates, members, officers, employees, agents, investors, and
          licensors for any injury, including but not limited to bodily harm or
          death, to you or any third party that may result from the use of or
          reliance on any Content or product shipped to you by ACIL. You understand
          and agree that ACIL is merely providing product samples to you as a service
          and that ACIL has no control over, or responsibility for, the products
          themselves and/or any adverse reactions you may experience as a result of
          their use. ACIL recommends that users exercise their skill and care
          concerning the use of any Content and should obtain any expert advice they
          consider necessary. We encourage clients to read our risk policy and data
          protection and usage policy.
        </Typography><br/>
        <Typography sx={tm.subhead}>Privacy</Typography>
        <Typography sx={tm.body}>
          ACIL respects your right to privacy of your personal information. Please
          review our Privacy Policy for details on how we collect, use, disclose and
          otherwise manage your personal information.
        </Typography><br/>
        <Typography sx={tm.subhead}>Contents</Typography>
        <Typography sx={tm.body}>
          From time to time we may offer and/or co-investor contests or promotions on
          the Website. Each of these activities shall be governed by specific rules
          accessible from the pages of the Website offering the promotion or when you
          submit your entry.
        </Typography><br/>
        <Typography sx={tm.subhead}>Ratings & Reviews</Typography>
        <Typography sx={tm.body}>
          ACIL may enable you to help others make smart shopping decisions by
          providing ratings and reviews about your experience with various brands’
          products. When you provide such ratings and reviews and allow us to share
          them with others publicly, we need to obtain certain rights to reproduce
          your rating and review. When you provide a rating and review, you (i)
          represent and warrant that it is your original work and that you have the
          right and authority to, and do hereby, grant us an irrevocable,
          non-exclusive, royalty-free worldwide license in perpetuity to reproduce,
          store, copy, transmit, broadcast, display, distribute, use, edit,
          translate, combine with other material, publish, post, alter, adapt, create
          derivative works from, commercialize, trade-mark and otherwise use, without
          limitation, all or any part of the rating and review in any manner and
          media whether now known or hereafter devised including, without limitation,
          on the ACIL or brand partner’s website or third-party review networks used
          by our brand partners; and (ii) waive all moral rights that you may have in
          and to the rating & review concerning the uses contemplated herein.
        </Typography><br/>
        <Typography sx={tm.subhead}>Changes & Termination</Typography>
        <Typography sx={tm.body}>
          ACIL reserves the right at any time and from time to time to modify or
          discontinue, temporarily or permanently, the Website (or any part thereof)
          with or without notice. Further, ACIL reserves the right to change these
          Terms of Use at any time and to notify you by posting an updated version of
          the Terms of Use on this Website. You are responsible for regularly
          reviewing the Terms of Use, including, without limitation, by checking the
          date of "Last Update" at the bottom of this document. Continued use of the
          Website after any such changes shall constitute your consent to be bound by
          such changes, with continued provision of the use of the Website
          constituting consideration from ACIL to you for so being bound. Your only
          right concerning any dissatisfaction with (1) these Terms of Use (2) any
          policy or practise of ours in operating the Website or (3) any Content
          available through the Website, is to stop visiting and using the Website.
        </Typography><br/>
        <Typography sx={tm.subhead}>Trademarks</Typography>
        <Typography sx={tm.body}>
          "ACIL" and "www.agrocil.com" are trademarks of ACIL. Other marks, graphics,
          typefaces, trademarks and logos appearing on the Website are trademarks or
          trade dress of ACIL. All other trademarks appearing on the Website are
          property of their respective owners. Our trademarks and trade dress may not
          be used in any manner for any purpose without our express written consent.
        </Typography>
        <Typography sx={tm.subhead}>Applicable Laws</Typography>
        <Typography sx={tm.body}>
          Unless the applicable laws of your jurisdiction, such as Nigeria, require
          that the laws of your jurisdiction govern, these Terms of Use shall be
          governed by and construed per the laws of Nigeria applicable therein, and
          any dispute is to be submitted to a court of competent jurisdiction in the
          judicial district of Abuja, Nigeria. If any provision of the present Terms
          of Use shall be unlawful, void, or for any reason is unenforceable, then
          such provision shall be severable from these Terms of Use and shall not
          affect the validity and enforceability of any remaining provisions. These
          Terms of Use shall not be governed by the United Nations Convention on
          Contracts for the International Sale of Goods, which is expressly excluded
          and you also expressly agree to exclude the applicability of the Uniform
          Computer Information Transactions Act. A printed copy of these Terms of Use
          and any notice in electronic form shall be admissible in any judicial or
          administrative proceedings to the same extent and under the same conditions
          as other business documents and records originally generated and maintained
          in printed form. You agree that you will only sue us as an individual. You
          agree that you will not file a class action, or participate in a class
          action. <br/>
          These Terms of Use and all other legal notices or statements posted on the
          Website constitute the entire agreement between you and ACIL concerning the
          use of the Website, including the Content.
        </Typography><br/>
        <Typography sx={tm.subhead}>Notice</Typography>
        <Typography sx={tm.body}>
          Notices to you may be made via e-mail or regular mail or in cases of
          changes to these Terms of Use or to the services offered by the Website, by
          posting notices or links to such notices on the Website itself.<br/>
          If you have any questions or comments regarding these Terms of Use please
          contact us at <a href="mailto:info@agrocil.com">info@agrocil.com</a>
        </Typography>
      </Grid>
    </Box>
  )
}

export default Terms;