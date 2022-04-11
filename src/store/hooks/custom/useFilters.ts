import { ChangeEvent } from 'react';
import { FilterType } from '../../../@types';
import { useCategoriesDispatch, useCategoriesState } from '../categoriesHook';

export const useFilter = () => {
  const { categoriesSelected, accesibilities, dataSources } = useCategoriesState();
  const { setCategoriesSelected, setAccesibilitiesSelected, setDataSourcesSelected } = useCategoriesDispatch();
  const handleChangeCategory = (event: ChangeEvent<HTMLInputElement>, category: FilterType) => {
    if (categoriesSelected.indexOf(category.attrib) > -1 && !event.target.checked) {
      setCategoriesSelected(categoriesSelected.filter((_category: string) => _category !== category.attrib));
    } else if (event.target.checked) {
      setCategoriesSelected([...categoriesSelected, category.attrib]);
    }
  };
  const handleChangeAccesibilities = (event: ChangeEvent<HTMLInputElement>, accesibility: FilterType) => {
    if (accesibilities.indexOf(accesibility.attrib) > -1 && !event.target.checked) {
      setAccesibilitiesSelected(
        accesibilities.filter((_accesibility: string) => _accesibility !== accesibility.attrib)
      );
    } else if (event.target.checked) {
      setAccesibilitiesSelected([...accesibilities, accesibility.attrib]);
    }
  };
  const handleChangeDataSources = (event: ChangeEvent<HTMLInputElement>, dataSource: FilterType) => {
    if (dataSources.indexOf(dataSource.attrib) > -1 && !event.target.checked) {
      setDataSourcesSelected(dataSources.filter((_category: string) => _category !== dataSource.attrib));
    } else if (event.target.checked) {
      setDataSourcesSelected([...dataSources, dataSource.attrib]);
    }
  };
  return {
    categoriesSelected,
    accesibilities,
    dataSources,
    setCategoriesSelected,
    handleChangeCategory,
    handleChangeAccesibilities,
    handleChangeDataSources
  };
};
