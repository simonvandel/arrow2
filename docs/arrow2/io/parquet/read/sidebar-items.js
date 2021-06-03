initSidebarItems({"enum":[["CompressedPage","A [`CompressedPage`] is compressed, encoded representation of a Parquet page. It holds actual data and thus cloning it is expensive. Favor passing this enum by value, as it deallocates it as soon as it is not needed, thereby reducing memory usage."],["LogicalType",""],["ParquetError",""],["ParquetTimeUnit",""],["ParquetType","Representation of a Parquet type. Used to describe primitive leaf fields and structs, including top-level schema. Note that the top-level schema type is represented using `GroupType` whose repetition is `None`."],["PhysicalType",""],["PrimitiveConvertedType",""]],"fn":[["get_page_iterator","Creates a new iterator of compressed pages."],["page_iter_to_array",""],["read_metadata","Reads parquets’ metadata."]],"mod":[["schema",""]],"struct":[["ColumnChunkMetaData","Metadata for a column chunk."],["ColumnDescriptor","A descriptor for leaf-level primitive columns. This encapsulates information such as definition and repetition levels and is used to re-assemble nested data."],["FileMetaData","Metadata for a Parquet file."],["TimestampType","Timestamp logical type annotation"]]});