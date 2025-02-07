import { ChangeEvent, useEffect } from 'react';
import { FilterType, ModalFilterData } from '../../../@types';
import { DATASOURCES } from '../../../constants/categories';
import { useCategoriesDispatch, useCategoriesState } from '../categoriesHook';

export const useFilter = ({ setOpenModal }: ModalFilterData) => {
  const { categoriesSelected, accesibilities, dataSources } = useCategoriesState();
  const {
    setCategoriesSelected, setAccesibilitiesSelected, setDataSourcesSelected, setCallFilters
  } = useCategoriesDispatch();

  const closeModalAndCallFilters = () => {
    setOpenModal(false);
    setCallFilters(true);
  };

  const handleChangeCategory = (event: ChangeEvent<HTMLInputElement>, category: FilterType) => {
    if (categoriesSelected && categoriesSelected.indexOf(category.attrib) > -1 && !event.target.checked) {
      setCategoriesSelected(categoriesSelected.filter((_category: string) => _category !== category.attrib));
    } else if (event.target.checked) {
      setCategoriesSelected([...categoriesSelected, category.attrib]);
    }
  };
  const handleChangeAccesibilities = (event: ChangeEvent<HTMLInputElement>, accesibility: FilterType) => {
    if (accesibilities && accesibilities.indexOf(accesibility.attrib) > -1 && !event.target.checked) {
      setAccesibilitiesSelected(
        accesibilities.filter((_accesibility: string) => _accesibility !== accesibility.attrib)
      );
    } else if (event.target.checked) {
      setAccesibilitiesSelected([...accesibilities, accesibility.attrib]);
    }
  };
  const handleChangeDataSources = (event: ChangeEvent<HTMLInputElement>, dataSource: FilterType) => {
    if (dataSources && dataSources.indexOf(dataSource.attrib) > -1 && !event.target.checked) {
      setDataSourcesSelected(dataSources.filter((_category: string) => _category !== dataSource.attrib));
    } else if (event.target.checked) {
      setDataSourcesSelected([...dataSources, dataSource.attrib]);
    }
  };
  useEffect(() => {
    if (categoriesSelected.length || accesibilities.length) {
      if (dataSources.indexOf('retailers_pha') === -1) {
        setDataSourcesSelected([...dataSources, 'retailers_pha']);
      }
      const indexOfOSM = dataSources.indexOf(DATASOURCES[1].attrib);
      const indexOfUSDA = dataSources.indexOf(DATASOURCES[2].attrib);
      if (indexOfOSM > -1) {
        dataSources.splice(indexOfOSM, 1);
        setDataSourcesSelected([...dataSources]);
      }
      if (indexOfUSDA > -1) {
        dataSources.splice(indexOfUSDA, 1);
        setDataSourcesSelected([...dataSources]);
      }
    }
  }, [categoriesSelected, accesibilities, dataSources, setDataSourcesSelected]);
  return {
    categoriesSelected,
    accesibilities,
    dataSources,
    closeModalAndCallFilters,
    setCategoriesSelected,
    handleChangeCategory,
    handleChangeAccesibilities,
    handleChangeDataSources,
  };
};
