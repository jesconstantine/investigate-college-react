/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');

/* Initial Demo Stuff */
const RaisedButton = require('material-ui/lib/raised-button');
const Dialog = require('material-ui/lib/dialog');
const Paper = require('material-ui/lib/paper');

/* App Header Stuff */
const AppBar = require('material-ui/lib/app-bar');
const IconMenu = require ('material-ui/lib/menus/icon-menu');
const IconButton = require ('material-ui/lib/icon-button');
const MenuItem = require ('material-ui/lib/menus/menu-item');
const MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');

/* Icons */
const NavigationCloseIcon = require('material-ui/lib/svg-icons/navigation/close');
const AccountBalanceIcon = require('material-ui/lib/svg-icons/action/account-balance');
const SearchIcon = require('material-ui/lib/svg-icons/action/search');
const AdvSearchIcon = require('material-ui/lib/svg-icons/action/zoom-in');
const ClassIcon = require('material-ui/lib/svg-icons/action/class');
const MapIcon = require('material-ui/lib/svg-icons/maps/map')
const GroupIcon = require('material-ui/lib/svg-icons/social/group')

/* Card Stuff */
const Card = require('material-ui/lib/card/card');
const CardHeader = require('material-ui/lib/card/card-header');
const CardTitle = require('material-ui/lib/card/card-title');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const Avatar = require('material-ui/lib/avatar');
const DropDownMenu = require('material-ui/lib/drop-down-menu');
const CheckboxField = require('material-ui/lib/checkbox');
const TextField = require('material-ui/lib/text-field');

/* Theme Stuff */
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');

const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500
    });

    this.setState({muiTheme: newMuiTheme});
  },

  render() {

    let containerStyle = {
      paddingTop: 0
    };

    let standardActions = [
      { text: 'Okay' }
    ];

    let mainPaperStyle = {
      width: "80%",
      padding: "48px 24px",
      margin: "24px auto"
    };

    let appBarStyle = {
      backgroundColor: Colors.indigo900,
      textAlign: 'center'
    };

    let degreeItems = [
       { payload: '', text: 'Any' },
       { payload: 'a', text: 'Two Year (Associate\'s)' },
       { payload: 'b', text: 'Four Year (Bachelor\'s)' }
    ];

    let programItems = [
      { payload: '', text: 'Any' },
      { payload: 'Agriculture', text: 'Agriculture Operations, and Related Sciences' },
      { payload: 'architecture', text: 'Architecture and Related Services' },
      { payload: 'ethnic_cultural_gender', text: 'Area, Ethnic, Cultural, Gender, and Group Studies' },
      { payload: 'biological', text: 'Biological and Biomedical Sciences' },
      { payload: 'business_marketing', text: 'Business, Management, Marketing, and Related Support Services' },
      { payload: 'communication', text: 'Communication, Journalism, and Related Programs' },
      { payload: 'communications_technology', text: 'Communications Technologies/Technicians and Support Services' },
      { payload: 'computer', text: 'Computer and Information Sciences and Support Services' },
      { payload: 'construction', text: 'Construction Trades' },
      { payload: 'education', text: 'Education' },
      { payload: 'engineering', text: 'Engineering' },
      { payload: 'engineering_technology', text: 'Engineering Technologies and Engineering-Related Fields' },
      { payload: 'english', text: 'English Language and Literature/Letters' },
      { payload: 'family_consumer_science', text: 'Family and Consumer Sciences/Human Sciences' },
      { payload: 'language', text: 'Foreign Languages, Literatures, and Linguistics' },
      { payload: 'health', text: 'Health Professions and Related Programs' },
      { payload: 'history', text: 'History' },
      { payload: 'security_law_enforcement', text: 'Homeland Security, Law Enforcement, Firefighting and Related Protective Services' },
      { payload: 'legal', text: 'Legal Professions and Studies' },
      { payload: 'humanities', text: 'Liberal Arts and Sciences, General Studies and Humanities' },
      { payload: 'library', text: 'Library Science' },
      { payload: 'mathematics', text: 'Mathematics and Statistics' },
      { payload: 'mechanic_repair_technology', text: 'Mechanic and Repair Technologies/Technicians' },
      { payload: 'military', text: 'Military Technologies and Applied Sciences' },
      { payload: 'multidiscipline', text: 'Multi/Interdisciplinary Studies' },
      { payload: 'resources', text: 'Natural Resources and Conservation' },
      { payload: 'parks_recreation_fitness', text: '"Parks, Recreation, Leisure, and Fitness Studies' },
      { payload: 'personal_culinary', text: 'Personal and Culinary Services' },
      { payload: 'philosophy_religious', text: 'Philosophy and Religious Studies' },
      { payload: 'physical_science', text: 'Physical Sciences' },
      { payload: 'precision_production', text: 'Precision Production' },
      { payload: 'psychology', text: 'Psychology' },
      { payload: 'public_administration_social_service', text: 'Public Administration and Social Service Professions' },
      { payload: 'science_technology', text: 'Science Technologies/Technicians' },
      { payload: 'social_science', text: 'Social Sciences' },
      { payload: 'theology_religious_vocation', text: 'Theology and Religious Vocations' },
      { payload: 'transportation', text: 'Transportation and Materials Moving' },
      { payload: 'visual_performing', text: 'Visual and Performing Arts' }
    ];

    let regionItems = [
      { payload: '', text: 'Any' },
      { payload: '1', text: 'New England (CT ME MA NH RI VT)' },
      { payload: '2', text: 'Mid-Atlantic (DE DC MD NJ NY PA)' },
      { payload: '3', text: 'Great Lakes (IL IN MI OH WI)' },
      { payload: '4', text: 'Plains (IA KS MN MO NE ND SD)' },
      { payload: '5', text: 'Southeast (AL AR FL GA KY LA MS NC SC TN VA WV)' },
      { payload: '6', text: 'Southwest (AZ NM OK TX)' },
      { payload: '7', text: 'Rocky Mountains (CO ID MT UT WY)' },
      { payload: '8', text: 'Far West (AK CA HI NV OR WA)' },
      { payload: '9', text: 'Outlying areas (AS FM GU MH MP PR PW VI)' }
    ];

    let specialDesignationItems = [
      { payload: '', text:           'Any' },
      { payload: 'women_only', text:           'Women-Only' },
      { payload: 'men_only', text:             'Men-Only' },
      { payload: 'aanipi', text:               'Asian American and Native American Pacific Islander-Serving Institution' },
      { payload: 'annh', text:                 'Alaska Native and Native Hawaiian-Serving Institution' },
      { payload: 'hispanic', text:             'Hispanic-Serving Institution' },
      { payload: 'historically_black', text:   'Historically Black College and University' },
      { payload: 'nant', text:                 'Native American Non-Tribal Institution' },
      { payload: 'predominantly_black', text:  'Predominantly Black Institution' },
      { payload: 'tribal', text:               'Tribal College and University' }
    ];

    let religionItems = [
      { payload: '', text: 'Any' },
      { payload: '51', text: 'African Methodist Episcopal' },
      { payload: '24', text: 'African Methodist Episcopal Zion Church' },
      { payload: '52', text: 'American Baptist' },
      { payload: '22', text: 'American Evangelical Lutheran Church' },
      { payload: '53', text: 'American Lutheran' },
      { payload: '27', text: 'Assemblies of God Church' },
      { payload: '54', text: 'Baptist' },
      { payload: '28', text: 'Brethren Church' },
      { payload: '34', text: 'Christ and Missionary Alliance Church' },
      { payload: '61', text: 'Christian Church (Disciples of Christ)' },
      { payload: '48', text: 'Christian Churches and Churches of Christ' },
      { payload: '55', text: 'Christian Methodist Episcopal' },
      { payload: '35', text: 'Christian Reformed Church' },
      { payload: '58', text: 'Church of Brethren' },
      { payload: '57', text: 'Church of God' },
      { payload: '59', text: 'Church of the Nazarene' },
      { payload: '74', text: 'Churches of Christ' },
      { payload: '60', text: 'Cumberland Presbyterian' },
      { payload: '101', text: 'Ecumenical Christian' },
      { payload: '50', text: 'Episcopal Church, Reformed' },
      { payload: '102', text: 'Evangelical Christian' },
      { payload: '36', text: 'Evangelical Congregational Church' },
      { payload: '37', text: 'Evangelical Covenant Church of America' },
      { payload: '38', text: 'Evangelical Free Church of America' },
      { payload: '39', text: 'Evangelical Lutheran Church' },
      { payload: '64', text: 'Free Methodist' },
      { payload: '41', text: 'Free Will Baptist Church' },
      { payload: '65', text: 'Friends' },
      { payload: '91', text: 'Greek Orthodox' },
      { payload: '42', text: 'Interdenominational' },
      { payload: '40', text: 'International United Pentecostal Church' },
      { payload: '80', text: 'Jewish' },
      { payload: '94', text: 'Latter Day Saints (Mormon Church)' },
      { payload: '68', text: 'Lutheran Church - Missouri Synod' },
      { payload: '67', text: 'Lutheran Church in America' },
      { payload: '43', text: 'Mennonite Brethren Church' },
      { payload: '69', text: 'Mennonite Church' },
      { payload: '87', text: 'Missionary Church Inc' },
      { payload: '44', text: 'Moravian Church' },
      { payload: '78', text: 'Multiple Protestant Denomination' },
      { payload: '45', text: 'North American Baptist' },
      { payload: '100', text: 'Original Free Will Baptist' },
      { payload: '79', text: 'Other Protestant' },
      { payload: '47', text: 'Pentecostal Holiness Church' },
      { payload: '103', text: 'Presbyterian' },
      { payload: '66', text: 'Presbyterian Church (USA)' },
      { payload: '73', text: 'Protestant Episcopal' },
      { payload: '77', text: 'Protestant, not specified' },
      { payload: '49', text: 'Reformed Church in America' },
      { payload: '81', text: 'Reformed Presbyterian Church' },
      { payload: '30', text: 'Roman Catholic' },
      { payload: '92', text: 'Russian Orthodox' },
      { payload: '95', text: 'Seventh Day Adventists' },
      { payload: '75', text: 'Southern Baptist' },
      { payload: '97', text: 'The Presbyterian Church in America' },
      { payload: '88', text: 'Undenominational' },
      { payload: '93', text: 'Unitarian Universalist' },
      { payload: '84', text: 'United Brethren Church' },
      { payload: '76', text: 'United Church of Christ' },
      { payload: '71', text: 'United Methodist' },
      { payload: '89', text: 'Wesleyan' },
      { payload: '33', text: 'Wisconsin Evangelical Lutheran Synod' },
      { payload: '99', text: 'Other (none of the above)' }
    ];


    return (
      <div style={containerStyle}>
        <AppBar
          title="Investigate College"
          style={appBarStyle}
          iconElementLeft={<IconButton><AccountBalanceIcon color={Colors.fullWhite} /></IconButton>}
          iconElementRight={
            <IconMenu iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }>
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
        } />

        <Dialog
          title="Super Secret Password"
          actions={standardActions}
          ref="superSecretPasswordDialog">
          1-2-3-4-5
        </Dialog>

        <Paper zDepth={4} style={mainPaperStyle}>
          <h1>Find Schools</h1>
          <h2>Compare Schools Now</h2>

          <Card initiallyExpanded={false}>
            <CardHeader
              title="Programs / Degrees"
              subtitle="Subtitle"
              avatar={<ClassIcon color={Colors.blueGrey900} />}
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <h3>Choose a degree</h3>
              <DropDownMenu menuItems={degreeItems} maxHeight="300px" />

              <h3>Choose a program</h3>
              <DropDownMenu menuItems={programItems} />

            </CardText>
          </Card>

          <Card initiallyExpanded={false}>
            <CardHeader
              title="Location"
              subtitle="Subtitle"
              avatar={<MapIcon color={Colors.blueGrey900} />}
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <h3>Select a region</h3>
              <DropDownMenu menuItems={regionItems} />
            </CardText>
          </Card>

          <Card initiallyExpanded={false}>
            <CardHeader
              title="Size"
              subtitle="Subtitle"
              avatar={<GroupIcon color={Colors.blueGrey900} />}
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <h3>Undergraduate Student Body</h3>
              <CheckboxField
                name="size"
                value="small"
                label="Small (< 2,000)"/>
              <CheckboxField
                name="size"
                value="medium"
                label="Medium (< 2,000 - 15,000)"/>
              <CheckboxField
                name="size"
                value="large"
                label="Large (> 15,000)"/>
            </CardText>
          </Card>

          <Card initiallyExpanded={false}>
            <CardHeader
              title="Name"
              subtitle="Subtitle"
              avatar={<AccountBalanceIcon />}
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <h3>School Name</h3>
              <TextField
                hintText="e.g., USA University" />
            </CardText>
          </Card>

          <Card initiallyExpanded={false}>
            <CardHeader
              title="Advanced Search"
              subtitle="Subtitle"
              avatar={<AdvSearchIcon />}
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <h3>Type of school</h3>
              <CheckboxField
                name="control"
                value="public"
                label="Public"/>
              <CheckboxField
                name="control"
                value="private"
                label="Private Nonprofit"/>
              <CheckboxField
                name="control"
                value="private"
                label="Private For-Profit"/>

              <h3>Specialized mission</h3>
              <DropDownMenu menuItems={specialDesignationItems} />

              <h3>Religious affiliation</h3>
              <DropDownMenu menuItems={religionItems} />
            </CardText>
          </Card>

          <RaisedButton label="Find Schools" primary={true} onTouchTap={this._handleTouchTap} />
        </Paper>
        

      </div>
    );
  },

  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  }

});

module.exports = Main;
