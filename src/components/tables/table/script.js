import AIcon            from '@/components/icon';
import TablePagination  from "@/components/tables/table-pagination";

export default {
  name: "a-table",
  components: {
    AIcon,
    TablePagination,
  },
  props: {
    headers: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
    rows: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
    footers: {
      type: Array,
      required: false,
    },
    sort: {
      type: Object,
      default() {
        return {};
      },
    },
    pagination: {
      type: Object,
      default() {
        return {};
      },
    },
    tableStyle: {
      type: String,
      default: "",
    },
    responsive: {
      type: Boolean,
      default: null,
    },
    scrollable: {
      type: Boolean,
      default: null,
    },
    hover: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      sortDefault: {
        field: null,
        type: "asc",
      },
      paginationDefault: {
        enabled: false,
        itemsPerPage: 10,
        align: "right",
        visualStyle: "buttons",
      },
      sortColumn: null,
      sortField: null,
      sortOrder: null,
      visibleRows: {},
      tableRows: {},
      page: 1,
    };
  },
  watch: {
    rows: function () {
      this.tableRows = this.rows.slice(0);
      this.selectVisibleRows();
    },
  },
  computed: {
    sortOptions() {
      return Object.assign(this.sortDefault, this.sort);
    },
    paginationOptions() {
      return Object.assign(this.paginationDefault, this.pagination);
    },
    sortEnabled() {
      return this.sortOptions.field != null && this.numRows > 0;
    },
    paginationEnabled() {
      return (
        this.paginationOptions.enabled &&
        this.paginationOptions.itemsPerPage > 0 &&
        this.numRows > 0
      );
    },
    numRows() {
      return this.rows.length;
    },
    numColumns() {
      return this.headers.length;
    },
    totalPages() {
      return this.paginationEnabled
        ? Math.ceil(this.numRows / this.paginationOptions.itemsPerPage)
        : null;
    },
  },
  mounted() {
    this.tableRows = this.rows.slice(0);
    if (this.sortEnabled) this.initSort();
    this.selectVisibleRows();
  },
  methods: {
    onNewPage: function (newPage) {
      this.page = newPage;
      this.selectVisibleRows();
    },
    selectVisibleRows: function () {
      if (this.paginationEnabled) {
        const rowFirst =
          this.page * this.paginationOptions.itemsPerPage -
          this.paginationOptions.itemsPerPage;
        const rowLast = this.page * this.paginationOptions.itemsPerPage;
        this.visibleRows = this.tableRows.slice(rowFirst, rowLast);
      } else this.visibleRows = this.tableRows.slice(0);
    },
    initSort: function () {
      this.sortOrder = this.sortOptions.order === "asc" ? "asc" : "desc";
      let defaultSortColumn = null;
      for (let x = 0; x < this.headers.length; x++) {
        if (
          this.headers[x].sortable &&
          this.headers[x].field == this.sortOptions.field
        ) {
          defaultSortColumn = x;
          break;
        }
      }
      if (defaultSortColumn != null) this.sortBy(defaultSortColumn);
    },
    sortBy: function (idx) {
      if (this.sortEnabled && this.headers[idx].sortable) {
        if (this.sortColumn == idx) {
          this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
          this.tableRows.reverse();
        } else {
          this.sortColumn = idx;
          this.sortOrder = "asc";
          this.sortField = this.headers[idx].field;
          if (this.headers[idx].type == "Number") {
            this.tableRows.sort(
              (a, b) => a[this.sortField] - b[this.sortField]
            );
          } else {
            this.tableRows.sort((a, b) =>
              a[this.sortField].localeCompare(b[this.sortField])
            );
          }
        }
        this.page = 1;
        this.selectVisibleRows();
      }
    },
  },
};