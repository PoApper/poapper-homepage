import React,  { Component } from "react"
import styled from "styled-components"
import { FiDownload } from "react-icons/fi"
import { AiOutlineSearch } from "react-icons/ai"
import Select from 'react-select'

import { meetingSeminarList } from "./seminar-list"
import { options } from "preact"

const MeetingSeminarCard = ({
  cardTitle,
  date,
  datepriority,
  author,
  githubId,
  cardDetailedText,
  ...props
}) => (
  <SeminarCard {...props}>
    <Head>
      <Title>{cardTitle}</Title>
      <FiDownload size="1rem" />
    </Head>

    <Info>
      <Date>{date}</Date>|
      <Presenter>{author} <Link href={`https://github.com/${githubId}`}>(@{githubId})</Link></Presenter>
    </Info>

    <Content>{cardDetailedText}</Content>
    <hr className="hrcss" />
  </SeminarCard>
)

const SeminarTimeline = () => (
  <MeetingSeminar>
    <Tool>
      <Year>
        <DropdownYear/>
      </Year>
      <Search>
        <SearchInput />
        &nbsp; | &nbsp;
        <AiOutlineSearch />
      </Search>
        <SortForm />
    </Tool>
    {meetingSeminarList
      .map(seminar => (
        <MeetingSeminarCard
        cardTitle={seminar.cardTitle}
        date={seminar.date}
        author={seminar.author}
        githubId={seminar.githubId}
        cardDetailedText={seminar.cardDetailedText}
        />
      ))
    }
  </MeetingSeminar>
)

class SortForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: SortOptions
    };

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      selectedOption: event.target.selectedOption
    })
  }

  handleSubmit(event) {
    dataSortHandler();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div style={{width:'140px'}}>
      <Select
        value={this.state.value} 
        options={this.state.selectedOption}
        isSearchable={false}
        defaultValue={SortOptions[0]}
        onChange={this.handleChange}
        styles={CustomStyles}
      />
      </div>
      </form>
    )
  }
}



class dataSortHandler extends React.Component {
  sortDateAscending = () => {
    meetingSeminarList.sort(function(a,b) {
      return a.datepriority < b.datepriority ? -1 : a.datepriority > b.datepriority ? 1: 0;
    });
    return;
  }
  
  sortDateDescending = () => {
    meetingSeminarList.sort(function(a,b) {
      return a.datepriority > b.datepriority ? -1 : a.datepriority < b.datepriority ? 1: 0;
    });
    return;
  }
  
  sortAlphabetical = () => {
    meetingSeminarList.sort(function(a,b) {
      return a.cardTitle < b.cardTitle ? -1 : a.cardTitle > b.cardTitle ? 1: 0;
    });
    return;
  }
  
  render() {
    if (this.state.selectedOption.value === 'dateAscending') {
      this.sortDateAscending();
    } else if (this.state.selectedOption.value === 'dateDescending') {
      this.sortDateDescending();
    } else if (this.state.selectedOption.value === 'alphabetical') {
      this.sortAlphabetical();
    } else {
      return;
    }
  }
}

const YearOptions = [
  { value: 'every history', label: '전체 년도' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' }
]

const DropdownYear = () => (
  <div style={{width:'110px'}}>
    <Select 
      options={YearOptions}
      isSearchable={false}
      defaultValue={YearOptions[0]}
      styles={CustomStyles}
    />
  </div>
)

const SortOptions = [
  { value: 'dateAscending', label: '날짜 오름차순' },
  { value: 'dateDescending', label: '날짜 내림차순' },
  { value: 'alphabetical', label: 'ABC순' }
]

const CustomStyles = {
  control: (provided, state) => ({
    ...provided,
    background: '#fff',
    border: "1.5px solid lightgrey",
    borderRadius: '5px',
    minHeight: 33.67,
    height: 33.67,
    boxShadow: 'none'
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: '30px',
  }),

  indicatorSeparator: state => ({
    display: 'none'
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: '30px',
    padding: '0'
  }),
  menu: (provided, state) => ({
    ...provided,
    border: "1.5px solid lightgrey",
    borderRadius: '5px',
    boxShadow: 'none'
  })
};



const Tool = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.9rem;    
`
const Year = styled.div`
 margin: 0 1rem 0 0;
`

const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 14rem;
  margin: 5px 1rem 5px 0;
  padding: 0.25rem 0.6rem;
  border: 1.5px solid lightgrey;
  border-radius: 5px;
`

const SearchInput = styled.input`
  flex: 1;
  border: none;
  height: 20.667px
`

const MeetingSeminar = styled.div`
  margin: 1.3rem 0;
`

const SeminarCard = styled.div`
  margin: 1.5rem 1rem 0rem 1rem;
`

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.h3`
  margin: 0 0.8rem 0 0;
`
const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0;
  font-size: 0.9rem;
`

const Date = styled.div`
  margin-right: 0.3rem;
`

const Presenter = styled.div`
  margin-left: 0.3rem;
  color: black;
  text-decoration: none;
`

const Link = styled.a`
  color: black;
  text-decoration: none;
`

const Content = styled.div`
  margin: 0 0 1.5rem 0;
  color: #969696;
  font-size: 0.9rem;
`

export default SeminarTimeline
