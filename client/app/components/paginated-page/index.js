import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Pagination from 'react-router-pagination'

import {
  TOTAL_ITEMS,
  ITEMS_PER_PAGE
} from 'react-router-pagination-io/client/app/constants'

import Component from './component'

export default withRouter(connect(({ paginatedPage: { page } }) => ({ pageNumber: Pagination.calculatePageNumber(page, Pagination.calculateTotalPages(TOTAL_ITEMS, ITEMS_PER_PAGE)) }))(Component))
